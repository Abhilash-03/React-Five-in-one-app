import React, { useEffect, useState } from 'react'

const Quotes = () => {
    const [quote, setQuote] = useState([]);
    const [display, setDisplay] = useState('');
    const QuoteUrl = 'https://type.fit/api/quotes';

    useEffect(()=>{

        const getQuote = async()=>{
            try{
            let response = await fetch(QuoteUrl);
            let data = await response.json();
            setQuote(data)
            setDisplay(data[0])

            } catch(err){
                console.log(err.message);
            }
        }

        getQuote();

    }, [])

    const handleQuote = () =>{
        let randomQuote = quote[Math.floor(Math.random() * quote.length)]
        setDisplay(randomQuote);
    }


  return (
    <>
    <h1 className="quoteHeading text-white text-center m-3">Random Quote</h1>
    <div className='quoteBox'>
       <p className='quoteTxt'>{display.text}</p>
       <p className='quoteAuthor'>{display.author}</p>
      <button className='quoteBtn' onClick={handleQuote}>New Quote</button>
    </div>
    </>
  )
}

export default Quotes
