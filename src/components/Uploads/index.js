import React, { Component } from 'react';

import { DropContainer, UploadMessage } from './styles';
import Dropzone from 'react-dropzone';


export default class Uploads extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Arraste arquivos aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
  };
  
    
  

  render() {
    const { onUpload } = this.props;
    return (
       <Dropzone accept="image/*" onDropAccepted={onUpload} >
        { ( { getRootProps, getInputProps, isDragActive, isDragReject} ) => (
          <DropContainer
          { ...getRootProps() }
          isDragActive={isDragActive}
          isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {this.renderDragMessage( isDragActive, isDragReject)}
          </DropContainer>
        ) }
      </Dropzone>
    );
  }
}
