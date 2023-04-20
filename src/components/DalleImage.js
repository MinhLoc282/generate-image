import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Configuration, OpenAIApi } from 'openai';

import styles from './index.module.css';

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

delete configuration.baseOptions.headers['User-Agent'];

function DalleImage({ prompt }) {
  const [imageUrl, setImageUrl] = useState('');

  async function getAiResponse() {
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createImage({
      prompt,
      n: 1,
      size: '256x256',
    });
    setImageUrl(completion.data.data[0].url);
  }

  const handleOnClick = () => {
    getAiResponse();
  };

  return (
    <div className={styles.Container}>
      <button type="button" onClick={handleOnClick}>
        Get AI Response
      </button>

      {imageUrl
        ? <img src={imageUrl} alt={prompt} className={styles.Image} />
        : ''}
    </div>
  );
}

DalleImage.propTypes = {
  prompt: PropTypes.string.isRequired,
};

export default DalleImage;
