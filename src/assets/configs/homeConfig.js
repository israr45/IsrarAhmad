import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hello! I'm <strong className="main-name"> Israr Ahmad</strong>
        </h1>,
    titles: [
        "A Data Scientist",
        "A Machine Learning Specialist",
        "An Open Source Contributor",
        "A Backend Developer",
        "A Colombian"
    ],
    about: {  
        start: "My research spans the intersection of artificial intelligence, medical imaging, and " +  
            "computational vision, focusing on developing innovative solutions for complex healthcare " +  
            "and imaging challenges. This unique combination allows me to contribute to both theoretical " +  
            "advancements and practical implementations in medical and computer vision domains. " +  
            "In Medical Imaging & Healthcare AI, I focus on diagnostic imaging systems, including " +  
            "AI-powered diagnostic tools for autism spectrum disorder detection and various imaging " +  
            "modalities. My work in Computer Vision & Pattern Recognition involves designing novel " +  
            "neural architectures (PIYN) and developing racial identity-aware facial expression " +  
            "recognition systems. For Computational Imaging & Reconstruction, I work on efficient " +  
            "reconstruction methods and multi-modal imaging integration. My technical expertise spans " +  
            "deep learning frameworks like PyTorch and TensorFlow, along with extensive experience in " +  
            "image processing and scientific computing. I follow a research philosophy that integrates " +  
            "theory with practice, emphasizes cross-disciplinary innovation, and focuses on " +  
            "impact-driven development.",  
        exit: "I am actively seeking collaboration opportunities in medical imaging research groups, " +  
            "computer vision laboratories, healthcare AI initiatives, and cross-disciplinary imaging " +  
            "projects. My particular interests include advancing medical image reconstruction techniques, " +  
            "developing novel AI architectures for healthcare applications, contributing to open-source " +  
            "medical imaging tools, and exploring new frontiers in computational imaging. Currently " +  
            "seeking PhD positions in medical imaging, computer vision, and computational imaging, " +  
            "and am open to TA/RA roles in related fields."  
    },
    workTimeline: [
        {
            id: "work-4",
            title: "Sr ML Engineer",
            company: "EPAM",
            description: "Working to build scalable ML solutions, LLM's, and RAG architectures.",
            date: "2023-Present",
            icon: <BiRocket/>,
            tags: ["ml", "mlops", "python", "azure", "llm", "automl"]
        },
        {
            id: "work-3",
            title: "Sr Data Scientist",
            company: "Globant",
            description: "Build AutoML models and make them available to non-technical " +
                "users from a graphical interface.",
            date: "2021-2023",
            icon: <DiCodeigniter/>,
            tags: ["ml", "automl", "python", "docker", "redshift", "superset"]
        },
        {
            id: "work-2",
            title: "BI Manager",
            company: "Rappi",
            description: "Leading a team of analysts and data scientists to execute different projects, " +
                "including the construction of ETLs, data lakes, data warehouses, and machine learning models.",
            date: "2019-2021",
            icon: <FaMobileAlt/>,
            tags: ["ml", "airflow", "python", "docker", "snowflake", "postgres", "azure"]
        },
        {
            id: "work-1",
            title: "CRM Analytics Coordinator",
            company: "Avianca",
            description: "Tech leader of a BI, Data Science and DBA team. " +
                "Build forecast models, data warehouse and Power BI dashboards.",
            date: "2018-2019",
            icon: <GiCommercialAirplane/>,
            tags: ["ml", "mssql", "python", "docker", "pbi", "azure"]
        },
        {
            id: "work-0",
            title: "BI Analyst",
            company: "Onelink BPO",
            description: "Build interactive dashboards, ETLs and SQL queries to show the company KPIs.",
            date: "2016-2018",
            icon: <BsClipboardData/>,
            tags: ["python", "mssql", "pbi", "excel"]
        }
    ]
}


export default homeConfig
