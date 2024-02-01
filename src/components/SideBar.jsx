
export const SideBar = ({ handlePage, currentPage }) => {

    return (
        <nav className="sticky top-0 shadow-xl bg-white flex w-[14vw] items-center h-[100dvh] pt-6 pb-12 px-6">
            <div>
                <div onClick={() => (handlePage("dashboard"))} className={`items-stretch ${currentPage === 'dashboard' ? 'bg-cyan-600 rounded-lg' : ''} cursor-pointer flex justify-between gap-2.5 mt-6 p-2.5`}>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/17e18b8428ac833cca7f21f5b0bcca6e606187e043bb9c692ea1e54c18e75668?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
                        className="aspect-square object-contain object-center w-6 bg-black pb-[2px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                    />
                    <div className={`${currentPage === 'dashboard' ? 'text-white' : 'text-black'} text-base leading-6 tracking-normal grow whitespace-nowrap self-start`}>
                        Dashboard
                    </div>
                </div>
                <div onClick={() => (handlePage("contact"))} className={`items-stretch ${currentPage === 'contact' ? 'bg-cyan-600 rounded-lg' : ''} cursor-pointer flex justify-between gap-2.5 mt-2 p-2.5 rounded-lg`}>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbce5e7878117d3820156ed264e70602cc1ae90f8a9229d14c7be3bc6be4b539?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
                        className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                    />
                    <div className={`${currentPage === 'contact' ? 'text-white' : 'text-black'} text-gray-900 text-base leading-6 tracking-normal grow whitespace-nowrap self-start`}>
                        Add Contact
                    </div>
                </div>
            </div>
        </nav>
    );
}


