import './App.css'
import PricingOptions from './Compnents/PricingOptoins/PricingOptions';
import ResultChart from './Compnents/LineChart/ResultChart'
import Navbar from './Compnents/Navbar/Navbar'
import ProductBarChart from './Compnents/BarChart/ProductBarChart';
import axios from 'axios';
import ExamMarks from './Compnents/ExamMarks/ExamMarks';

const pricingPromise = fetch('pricingData.json').then(res => res.json());
const marksPrimise = fetch('../public/studentMark.json').then(res => res.json());
const exmaMarksPromise = axios.get('examMarks.json');

function App() {

  return (
    <>
      <Navbar></Navbar>

      {/* <ResultChart marksPrimise={marksPrimise}></ResultChart> */}

      {/* <ProductBarChart></ProductBarChart> */}

      <ExamMarks exmaMarksPromise={exmaMarksPromise}></ExamMarks>

      <PricingOptions pricingPromise={pricingPromise}></PricingOptions>

    </>
  )
}

export default App
