import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="flex items-center justify-between bg-gray-200 px-4 py-2">
        <h1 className="font-bold text-2xl">VanCam</h1>
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Phone"
            className="h-5 w-5"
            role="img"
            viewBox="0 0 512 512"
          >
            <rect width="512" height="512" rx="15%" fill="#20df40" />
            <path
              fill="#fff"
              d="M395 338c-10-9-22-17-33-23-23-16-43-17-59 6-10 14-23 16-37 10-39-18-68-43-84-82-8-16-8-31 10-42 9-6 19-14 18-28-1-18-44-78-62-84-8-2-14-2-22 0-41 14-57 46-42 85a451 451 0 0 0 251 248l17 5c26 0 57-25 67-50 9-24-10-34-24-45z"
            />
            <path
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-width="17"
              d="M268 138s41-1 72 30c31 30 27 74 27 74m-87-63s18-2 33 14c15 15 13 34 13 34M255 98s64-3 111 44c47 48 43 114 43 114"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Telegram"
            className="h-5 w-5"
            role="img"
            viewBox="0 0 512 512"
          >
            <rect width="512" height="512" rx="15%" fill="#37aee2" />
            <path
              fill="#c8daea"
              d="M199 404c-11 0-10-4-13-14l-32-105 245-144"
            />
            <path fill="#a9c9dd" d="M199 404c7 0 11-4 16-8l45-43-56-34" />
            <path
              fill="#f6fbfe"
              d="M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"
            />
          </svg>
        </div>
      </div>

      <div
        className="bg-cover bg-center h-48"
        style={{
          backgroundImage:
            'url(https://www.trustintape.com/wp-content/uploads/2018/05/Immagine-header-TT-1.jpg)',
        }}
      >
        <div className="flex flex-col justify-center bg-opacity-30 bg-gray-800 h-full text-center">
          <h1 className="font-bold text-white text-3xl px-16 text-center">
            Cambodia tapes whosale supplier
          </h1>
        </div>
      </div>
    </div>
  );
}
