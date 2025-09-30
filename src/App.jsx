import './App.css'
import PricingOptions from './Compnents/PricingOptoins/PricingOptions';
import ResultChart from './Compnents/LineChart/ResultChart'
import Navbar from './Compnents/Navbar/Navbar'

const pricingPromise = fetch('pricingData.json').then(res => res.json());
const marksPrimise = fetch('../public/studentMark.json').then(res => res.json());

function App() {

  return (
    <>
      <Navbar></Navbar>

      <ResultChart marksPrimise={marksPrimise}></ResultChart>

      <PricingOptions pricingPromise={pricingPromise}></PricingOptions>

    </>
  )
}

export default App
