const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
    <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <h1 className="font-extrabold text-xl">web<span className="orange_gradient ">LOOK</span>up</h1>

      <button
        type='button'
        onClick={() =>
          window.open("https://github.com/MoxitParmar/webLOOKup", "_blank")
        }
        className='black_btn'
      >
        GitHub
      </button>
    </nav>

    <h1 className='head_text'>
      Summarize Articles with <br className='max-md:hidden' />
      <span className='orange_gradient '>OpenAI GPT-4</span>
    </h1>
    <h2 className='desc'>
      Simplify your reading with Summize, an open-source article summarizer
      that transforms lengthy articles into clear and concise summaries
    </h2>
    </header>
  )
}

export default Hero