import {useState} from "react";

// eslint-disable-next-line react/prop-types
export const AddContact = ({ handleAddContact }) => {
    const [address, setAddress] = useState("")

    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        address: [],
        longitude: '',
        latitude: ''
    })

    const handleFormDataAddressChange = (e, index) => {
        const updatedAddresses = [...formData.address];
        updatedAddresses[index] = e.target.value;
        setFormData({ ...formData, address: updatedAddresses });
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleAddressChange = (e) => {
        setAddress(e.target.value)
    }

    const addAddressToList = () => {
        if (address.trim().length !== 0 && formData.address.length < 5) {
            formData.address.push(address)
        }
        setAddress("")
    }

    const removeAddressFromList = (index) => {
        const updatedAddress = [...formData.address];

        updatedAddress.splice(index, 1);

        setFormData({ ...formData, address: updatedAddress });
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        handleAddContact(formData);

        alert("Contact added successfully");
    }

    return (
        <form onSubmit={handleSubmit} className="h-full items-center flex w-full bg-cyan-500 flex-col px-10 py-8 max-md:px-5">
            <div className="flex flex-col m-auto">
                <div className="text-gray-900 text-2xl font-bold leading-8 self-center whitespace-nowrap">
                    Add New Contact
                </div>
                <div className="justify-center text-center text-base leading-6 tracking-normal self-center max-w-[374px] mt-2">
                    Please complete the Form to add a contact.
                </div>

                <label form="name" className="text-gray-900 text-base font-semibold leading-6 tracking-normal self-stretch mt-3 max-md:max-w-full">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="Input full name here"
                    className="text-black text-sm leading-5 whitespace-nowrap self-stretch border border-[color:var(--Grey-300,#D0D5DD)] bg-white justify-center mt-2 pl-4 pr-16 py-3 rounded-lg border-solid items-start max-md:max-w-full max-md:pr-5"
                    required
                />

                <label form="phoneNumber" className="text-gray-900 text-base font-semibold leading-6 tracking-normal self-stretch mt-3 max-md:max-w-full">
                    Phone Number
                </label>
                <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                    placeholder="Input phone number here"
                    className="text-black text-sm leading-5 whitespace-nowrap self-stretch border border-[color:var(--Grey-300,#D0D5DD)] bg-white justify-center mt-2 pl-4 pr-16 py-3 rounded-lg border-solid items-start max-md:max-w-full max-md:pr-5"
                    required
                />

                <label form="email" className="text-gray-900 text-base font-semibold leading-6 tracking-normal self-stretch mt-3 max-md:max-w-full">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Input email here"
                    className="text-black text-sm leading-5 whitespace-nowrap self-stretch border border-[color:var(--Grey-300,#D0D5DD)] bg-white justify-center mt-2 pl-4 pr-16 py-3 rounded-lg border-solid items-start max-md:max-w-full max-md:pr-5"
                    required
                />

                <div className="flex justify-between w-full items-center">
                    <label form="address" className="text-gray-900 text-base font-semibold leading-6 tracking-normal self-stretch mt-3 max-md:max-w-full">
                        Address(es)
                    </label>
                    <div>
                        <img
                            onClick={addAddressToList}
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbb23062-1ed7-4071-af07-a566632039f9?"
                            className="cursor-pointer hover:scale-125 transition aspect-[1.09] object-contain object-center w-[25px] bg-white overflow-hidden max-w-full mt-3 self-end"
                        />
                    </div>
                </div>
                <input
                    type="text"
                    name="address"
                    id="address"
                    onChange={handleAddressChange}
                    value={address}
                    placeholder="Input address here"
                    className="text-black text-sm leading-5 whitespace-nowrap self-stretch border border-[color:var(--Grey-300,#D0D5DD)] bg-white justify-center mt-2 pl-4 pr-16 py-3 rounded-lg border-solid items-start max-md:max-w-full max-md:pr-5"
                />

                { formData.address.map(
                    (add, index) => (
                        <div className="flex items-center gap-2">
                            <input
                                key={index}
                                type="text"
                                name="address"
                                id={`address-${index}`}
                                onChange={(e) => handleFormDataAddressChange(e, index)}
                                value={add}
                                placeholder="Input address here"
                                className="text-black text-sm leading-5 whitespace-nowrap w-[95%] self-stretch border border-[color:var(--Grey-300,#D0D5DD)] bg-white justify-center mt-2 pl-4 pr-16 py-3 rounded-lg border-solid items-start max-md:max-w-full max-md:pr-5"
                                required
                            />

                            <div
                                onClick={() => (removeAddressFromList(index))}
                                className="cursor-pointer bg-red-400 h-fit px-2 rounded-[50%] hover:scale-125 transition">
                                -
                            </div>
                        </div>
                    )
                ) }

                <label form="longitude" className="text-gray-900 text-base font-semibold leading-6 tracking-normal self-stretch mt-3 max-md:max-w-full">
                    Longitude
                </label>
                <input
                    type="text"
                    name="longitude"
                    id="longitude"
                    onChange={handleChange}
                    value={formData.longitude}
                    placeholder="Input longitude here"
                    className="text-black text-sm leading-5 whitespace-nowrap self-stretch border border-[color:var(--Grey-300,#D0D5DD)] bg-white justify-center mt-2 pl-4 pr-16 py-3 rounded-lg border-solid items-start max-md:max-w-full max-md:pr-5"
                    required
                />

                <label form="latitude" className="text-gray-900 text-base font-semibold leading-6 tracking-normal self-stretch mt-3 max-md:max-w-full">
                    Latitude
                </label>
                <input
                    type="text"
                    name="latitude"
                    id="latitude"
                    onChange={handleChange}
                    value={formData.latitude}
                    placeholder="Input latitude here"
                    className="text-black text-sm leading-5 whitespace-nowrap self-stretch border border-[color:var(--Grey-300,#D0D5DD)] bg-white justify-center mt-2 pl-4 pr-16 py-3 rounded-lg border-solid items-start max-md:max-w-full max-md:pr-5"
                    required
                />

                <button
                    type="submit"
                    className="cursor-pointer hover:bg-cyan-700  transition text-white text-base text-center font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-center self-stretch bg-cyan-600 mt-6 px-16 py-3 rounded-lg max-md:max-w-full max-md:px-5"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}