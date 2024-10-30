import React from 'react'

const Minigames = () => {
    return (
        <div id='Minigames' className='p-20 flex flex-col items-center justify-center'>
            <h1 data-aos="fade-right" className='text-5xl font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>
                Minigames
            </h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10 mb-20'>
                <div className="relative group">
                    <img
                        data-aos="fade-up"
                        height={250}
                        width={250}
                        className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow"
                        src="./assets/magicmemmory.jpg"
                        alt=""
                    />
                    <a href='https://maldikurniawan.github.io/magic-memory/' target='_blank' className="absolute inset-0 flex items-center justify-center rounded-3xl text-center bg-black bg-opacity-80 font-bold text-fuchsia-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Magic Memmory
                    </a>
                </div>
                <div className='relative group'>
                    <img
                        data-aos="fade-down"
                        height={250}
                        width={250}
                        className='text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow'
                        src="./assets/2048.jpg"
                        alt="" />
                    <a href='https://maldikurniawan.github.io/2048-animated/' target='_blank' className="absolute inset-0 flex items-center justify-center rounded-3xl text-center bg-black bg-opacity-80 font-bold text-fuchsia-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        2048
                    </a>
                </div>
                <div className='relative group'>
                    <img
                        data-aos="fade-up"
                        height={250}
                        width={250}
                        className='text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow'
                        src="./assets/tetris.jpg"
                        alt="" />
                    <a href='https://maldikurniawan.github.io/react-tetris/' target='_blank' className="absolute inset-0 flex items-center justify-center rounded-3xl text-center bg-black bg-opacity-80 font-bold text-fuchsia-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Tetris
                    </a>
                </div>
                <div className='relative group'>
                    <img
                        data-aos="fade-down"
                        height={250}
                        width={250}
                        className='text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow'
                        src="./assets/shooting.jpg"
                        alt="" />
                    <a href='https://maldikurniawan.github.io/r3f-playroom-multiplayer-shooter-game/' target='_blank' className="absolute inset-0 flex items-center justify-center rounded-3xl text-center bg-black bg-opacity-80 font-bold text-fuchsia-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Shooting Game
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Minigames