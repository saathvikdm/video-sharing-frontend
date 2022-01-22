import React from 'react';

import AudioBrowser from '../components/AudioBrowser';

import data from '../static-data.json';

export default function Audios() {
  return <AudioBrowser page={true} data={data} />;
}
