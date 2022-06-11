import React, { useEffect, useMemo } from 'react';
import Uppy from '@uppy/core';
import { Dashboard } from '@uppy/react';
import { Webcam } from '@uppy/webcam';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
function Uploader({ props }) {
  const uppy = useMemo(() => {
    return (
      new Uppy()
        ?.use(Webcam) // `id` defaults to "Webcam". Note: no `target` option!
        // or
        ?.use(Webcam, { id: 'MyWebcam' })
    );
    // `id` is… "MyWebcam"
  }, []);

  useEffect(() => {
    return () => uppy.close();
  }, []);

  return <Dashboard uppy={uppy} plugins={['Webcam']} {...props} />;
}

export default Uploader;
