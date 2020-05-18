import React, { useState, useEffect } from 'react'

import { PhotoArea, Title, DropContainer, Details, ScrollDetails, ImageSelected, ContainerDrag, MessageLoading, UploadMessage } from '../../styles/upload/styles';

import Dropzone from 'react-dropzone';

import { Info } from './fileInfo';

import { CircularProgressbar } from 'react-circular-progressbar';

export const DragArea = () => {

    const [image, setImage] = useState({})
    const [isMobile, setIsMobile] = useState({})
    const [loader, setLoader] = useState(false)
    const [percentage, setPercentage] = useState(0)
    const [classifier, setClassifier] = useState(null)
    const [clickImage, setClickImage] = useState(null)
    const [result, setResult] = useState(null)

    useEffect(() => {
        let ml5 = require('ml5');
        setClassifier(ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Fc9D3axga/model.json', () => console.log('loaded model')))

        if (window.innerWidth <= 760) setIsMobile(false)

    }, [])

    const renderDragMessage = (isDragActive, isDragReject) => {
        if (!isDragActive) return <UploadMessage type="info" >{isMobile ? "Arraste o arquivo aqui \n ou clique para fazer o  \n upload do arquivo.." : "Clique para fazer o \n upload do arquivo.."}</UploadMessage>

        if (isDragReject) return <UploadMessage type="error" >Arquivo inválido, somente arquivos de imagem.</UploadMessage>

        return <UploadMessage type="success" >Solte o arquivo aqui</UploadMessage>

    }


    const handleUpload = async (files) => {
        setImage({ preview: URL.createObjectURL(files[0]) })
        setLoader(true)
        classifierImage(URL.createObjectURL(files[0]), Math.random(new Date().getTime()))
    }

    const classifierImage = async (url, newId) => {
        const img = document.createElement("img");
        img.width = 968;
        img.height = 592;
        img.id = newId;
        img.src = url;
        img.style.display = "none";

        document.body.append(img);

        img.onload = async function () {
            let result = await classifier.classify(img)

            if (!result) throw new Error("Error");

            setResult(result[0].label)

            const timeout = setInterval(() => {
                setPercentage(percentage => {
                    if (percentage === 100) {
                        setLoader(false);
                        clearInterval(timeout)
                        return percentage;
                    }
                    else {
                        return percentage + 1
                    }
                })
            }, 50)

        }

    }

    const newTest = () => {
        setImage({})
        setLoader(false)
        setPercentage(0)
        setClickImage(null)
        setResult(null)
    }

    return (
        <PhotoArea>
            <Title>TESTE RADIOGRAFIA</Title>
            {loader && <CircularProgressbar value={percentage} text={`${percentage}%`} styles={{ root: { width: 175 }, path: { stroke: "#7159c1" } }} strokeWidth={10} />}
            {(!loader && !image.preview) && <ContainerDrag>
                <Dropzone accept="image/*" onDropAccepted={handleUpload}>
                    {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                        <DropContainer
                            {...getRootProps()}
                            isDragActive={isDragActive}
                            isDragReject={isDragReject}
                        >
                            {(!image.uploaded && image.error) && <img alt="download" src={require('../../images/computacao-em-nuvem.png')} />}

                            <input {...getInputProps()} />
                            {renderDragMessage(isDragActive, isDragReject)}

                        </DropContainer>
                    )}
                </Dropzone>
            </ContainerDrag>}
            {(image.preview && !loader) &&
                <ScrollDetails>
                    <ImageSelected onClick={() => setClickImage(clickImage ? false : true)} clickImage={clickImage} image={image}>
                        <Details clickImage={clickImage}>
                            <p>&nbsp;&nbsp;&nbsp;  A radiografia de tórax é indispensável tanto para
                            o diagnóstico como para avaliação de gravidade, bem
                            como para identificar condições coexistentes como
                            derrame pleural, cavitações, número de lobos acometidos e obstrução brônquica (complicações); acompanhar evolução e resposta ao tratamento3
                                , principalmente naqueles pacientes não respondedores à terapêutica inicial.</p>
                        </Details>
                    </ImageSelected><button onClick={newTest}>Nova avaliação</button>
                </ScrollDetails>}
            {image.preview && !loader && <Info setImage={setImage} result={result} />}
            {loader && <MessageLoading>ANALISANDO RADIOGRAFIA</MessageLoading>}
        </PhotoArea>
    )
}