import { useState, useEffect } from 'react';
import Spinner from '../Loader';
import API from '../../services/galery-api';
import Button from '../Button';
import ImageGallery from '../ImageGallery';
import EmptyField from '../EmptyField';
import PropTypes from 'prop-types';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function ImageGalleryInfo({ query }) {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) {
      return;
    }
    setStatus(Status.PENDING);
    fetchImgGallery();
    setStatus(Status.RESOLVED);
    // eslint-disable-next-line
  }, [query, page]);

  useEffect(() => {
    const resetPage = newQuery => {
      if (newQuery !== query) {
        setPage(1);
        setImages([]);
      }
    };
    resetPage();
  }, [query]);

  const fetchImgGallery = () => {
    API.fetchImages(query, page)
      .then(newImages => {
        setImages(prevImages => [...prevImages, ...newImages]);
        scrollPageToBottom();
        if (newImages.length === 0) {
          throw new Error('Hmm...Nothing here. Try another search.');
        }
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  };

  const scrollPageToBottom = () => {
    if (page !== 1) {
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  const onLoadMore = () => {
    setPage(page => page + 1);
  };

  if (status === Status.IDLE) {
    return (
      <div style={{ textAlign: 'center' }}>
        Please enter a search term to begin your search...
      </div>
    );
  }

  if (status === Status.PENDING) {
    return <Spinner />;
  }

  if (status === Status.REJECTED) {
    return <EmptyField message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <ImageGallery images={images} />
        {images.length !== 0 && <Button onClick={onLoadMore} />}
      </>
    );
  }
}
ImageGalleryInfo.propTypes = {
  query: PropTypes.string.isRequired,
};
