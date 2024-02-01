
export const Map = ({ selectedContact }) => {

    const zoom = 16;

    return(
        <section className="p-5">
            <iframe
                src={`https://maps.google.com/maps?q=${selectedContact?.longitude},${selectedContact?.latitude}&z=${zoom}&output=embed`}
                className="w-[100%] h-[60vh] shadow-xl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">

            </iframe>
        </section>
    )
}