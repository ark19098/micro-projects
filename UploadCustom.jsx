import { FileExcelOutlined, FileOutlined, InboxOutlined } from '@ant-design/icons';
import { Button, Progress, Space, Spin, Typography, Upload, message } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

const UploadCustom = () => {

    const [file, setFile] = useState({});
    const [uploading, setUploading] = useState(false);
    const [showProgress, setShowProgress] = useState(false);
    const [filePicked, setFilePicked] = useState(false);
    const [error, setError] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    // Every time user chooses a file, this function is called.
    const handleFilePick = (info) => {
        setFile(info.file);
        setFilePicked(true);
    }

    const handleFileUpload = async () => {
        setUploading(true);
        setShowProgress(true);
        const getFileObject = (progress, estimated) => {
            return {
                name: file.name,
                uid: file.uid,
                progress: progress,
                estimated: estimated,
            }
        } 
        try {
            axios.post('https://mediparity.com/mediapi/provider/upload-data', file, {
                onUploadProgress: (event) => {
                    console.log(event);
                    setFile(getFileObject(event.progress, event.estimated) );  //Changing file state on each chunk upload as informed by axios. Adding limited information.
                }
            });
            // if(response.data.code === 200) {
            //     message.success(`${file.name} file uploaded successfully`);
            // }
        } catch (error) {
            message.error(`${file.name} file upload failed.`);
        }
        setUploading(false);

    }

    if(file.progress === 1) {
        messageApi.open({
            type: 'success',
            content: `${file.name} file uploaded successfully`,
            style: {
              marginTop: '15vh',
            },
          });
    }

    return (
        <>
            {contextHolder}
            <Upload.Dragger
                customRequest={handleFilePick}
                name='file' 
                showUploadList={false}
                accept='.xls,.xlsx'
            >
                <p className="ant-upload-drag-icon">
                {filePicked ? <FileExcelOutlined /> : <InboxOutlined />} 
                </p>
                {filePicked ? <p>{file.name}</p> : <p className="ant-upload-text">Click or drag file to this area to upload</p>}
                <p className="ant-upload-hint">
                Strictly prohibited from uploading company data or other banned files.
                </p>
            </Upload.Dragger>
            <Button style={submitButton} type="primary" onClick={handleFileUpload}>Upload</Button>
            {showProgress &&
            <Space direction='vertical' style={progressSection}>
                <Space>
                    <FileOutlined />
                    <Typography>{file.name}</Typography>
                    <Typography.Text type='secondary'>{" "} is being uploaded in {Math.ceil(file.estimated)?Math.ceil(file.estimated):0} seconds</Typography.Text>
                </Space>
                <Progress percent={Math.ceil(file.progress * 100)} />
            </Space>}

        </>
    );
}

export default UploadCustom;

const submitButton = {
    width: '100%',
    height: '4rem',
    borderRadius: '0.3rem',
    backgroundColor: '#1A4E87',
    margin: 'auto',
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.8rem',
};

const progressSection = {
    backgroundColor: '#fafafa',
    width: '100%',
    borderRadius: '0.3rem',
    border: '1px solid #ccc',
    padding: '1rem',
    marginTop: '2rem',
};