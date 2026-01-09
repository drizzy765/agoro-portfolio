
import React from 'react';
import { Project, Verification } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'greenpulse',
    title: 'GreenPulseNG',
    description: 'Full-stack AI Emissions Tracker. Estimates Scope 1-3 carbon emissions using FastAPI, React, and Prophet forecasting.',
    liveUrl: 'https://greenpulsefrontend.vercel.app/',
    githubUrl: 'https://github.com/drizzy765/GreenpulseNG',
    category: 'Flagship',
    tags: ['FastAPI', 'React', 'Prophet', 'AI']
  },
  {
    id: 'debtpulse',
    title: 'Debt Pulse Africa',
    description: 'Fiscal Intelligence Dashboard. Visualizing sovereign debt trends across 14 African nations with 27k+ data points.',
    liveUrl: 'https://debt-pulse-africagit-egpunxnkzpictmjzgffs9r.streamlit.app/',
    githubUrl: 'https://github.com/drizzy765/debt-pulse-africa',
    category: 'Dashboard',
    tags: ['Streamlit', 'Data Viz', 'Finance']
  },
  {
    id: 'facemask',
    title: 'Face Mask Detection',
    description: 'Real-Time Safety System. Detects masked vs. unmasked faces in live video streams using OpenCV.',
    liveUrl: 'https://facemask-detection-with-cnn-4fwxblmrkprubx4pr5moyb.streamlit.app/',
    githubUrl: 'https://github.com/drizzy765/facemask-detection-with-CNN.git',
    category: 'Computer Vision',
    tags: ['OpenCV', 'CNN', 'Deep Learning']
  },
  {
    id: 'breast-cancer',
    title: 'Breast Cancer Classification',
    description: 'Medical Deep Learning. Engineered a CNN to detect cancer patterns in histopathology images with high sensitivity.',
    githubUrl: 'https://github.com/drizzy765/breast-cancer-classification-with-deep-learning.git',
    category: 'Medical',
    tags: ['Keras', 'Medical AI', 'Computer Vision']
  },
  {
    id: 'financial-data',
    title: 'AI Financial Data Analysis',
    description: 'Stock Impact Forecasting. Analyzed R&D/Revenue trends for OpenAI & Google using ARIMA time-series models.',
    githubUrl: 'https://github.com/drizzy765/AI-Financial-Data-Analysis.git',
    category: 'Finance',
    tags: ['ARIMA', 'Time Series', 'Python']
  }
];

export const VERIFICATIONS: Verification[] = [
  {
    title: 'BSc Mathematics',
    issuer: 'Lagos State University (LASU)',
    url: 'https://lasu.edu.ng/',
    icon: '🎓'
  },
  {
    title: 'Deep Learning with Keras and Tensorflow',
    issuer: 'IBM / Coursera',
    url: 'https://www.coursera.org/account/accomplishments/verify/K8732OD5WXIU',
    icon: '🧠'
  },
  {
    title: 'ML for Time Series Data in Python',
    issuer: 'DataCamp',
    url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/ecd010f4128b38390d620a1e344d59240ca5ae98',
    icon: '📈'
  },
  {
    title: 'IBM Data Science Professional Certificate',
    issuer: 'IBM / Coursera',
    url: 'https://www.coursera.org/account/accomplishments/specialization/V252T5DYMN8M',
    icon: '📜'
  },
  {
    title: 'Internship Verification (NAMA)',
    issuer: 'Nigerian Airspace Management Agency',
    url: 'https://drive.google.com/file/d/1u3ThN3j7f-iaL3xdnQdn94X37hMfBuiP/view?usp=sharing',
    icon: '📄'
  }
];

export const SOCIALS = {
  linkedIn: 'https://linkedin.com/in/agoro-oluwatimilehin',
  github: 'https://github.com/drizzy765',
  medium: 'https://medium.com/@agorotimilehin05',
  email: 'mailto:agorotimilehin05@gmail.com',
  phone: 'tel:09161842792',
  phoneRaw: '09161842792'
};

export const ACHIEVEMENTS = [
  "8th Place (Top 4%) - Data Science Nigeria Hackathon 2025"
];
