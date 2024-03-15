

export default function Footer() {
    return (


<footer className="w-full bg-gradient-to-r from-yellow-200 via-purple-300 rounded-xl mb-10">
    <div className="mx-auto max-w-screen-xl p-4 py-6 lg:py-8 ">
        <div className="md:flex md:items-center md:justify-center">
          <div className="mb-6 md:mb-0 gap-10">
              <a href="https://www.instagram.com/josemackinson/" className="flex items-center gap-5">
                  <img src="/logo.jpg" className="w-20 h-20 rounded-xl" alt="FlowBite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-700"> @josemackinson</span>
              </a>
          </div>
      </div>
      <hr className="my-6 border-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-center mx-auto mt-4 sm:justify-center sm:mt-0">
          </div>
      </div>
    </div>
</footer>

    );
}