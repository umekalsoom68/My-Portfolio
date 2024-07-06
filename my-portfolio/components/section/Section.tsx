import Image from 'next/image'

export default function Profile(){
    return(
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white flex flex-col items-center justify-center ml-10 mr-10 mb-20">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center max-w-md">
                <h1 className="text-4xl font-bold mb-4">
                    About <span className="text-blue-500">Me</span>
                </h1>
                <div className="flex justify-center items-center relative w-48 h-48 rounded-full overflow-hidden bg-gray-900 border-2 border-blue-400 shadow-md mx-auto">
                    <Image src="/images/git profile.jpg" alt="Profile Picture" layout="fill" objectFit="cover" />
                </div>   
                <h2 className="text-2xl font-semibold mb-4">Frontend Developer!</h2>
                <p className="text-gray-400 mb-6">
                Hy ,I am UmeKalsoom Rizvia From Bahawalpur.I’m currently learning Web Development. I’m looking to collaborate on Web Development I’m currently learning java script. Fun fact Programming
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                    Read More
                </button>
            </div>
        </div>
    
    )
}
