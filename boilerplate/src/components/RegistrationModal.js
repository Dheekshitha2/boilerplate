import React, { useState } from 'react';
import axios from 'axios';

function RegistrationModal({ showModal, setShowModal }) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        age: '',
        gender: '',
        relationship: '',
        mostComfortableLanguage: '',
        socialMedia: [],
        occupation: '',
        companyName: '',
        workEmail: '',
        workPhone: '',
        salaryRange: '',
        previousScamExperience: false,
        scammedPlatform: '',
        scammedAmount: '',
        protectionMeasures: [],
        onlineTransactionFrequency: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevFormData) => {
            const updatedMedia = checked
                ? [...prevFormData.socialMedia, value]
                : prevFormData.socialMedia.filter((media) => media !== value);
            return {
                ...prevFormData,
                socialMedia: updatedMedia,
            };
        });
    };

    const handleProtectionMeasuresChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevFormData) => {
            const updatedMeasures = checked
                ? [...prevFormData.protectionMeasures, value]
                : prevFormData.protectionMeasures.filter((measure) => measure !== value);
            return {
                ...prevFormData,
                protectionMeasures: updatedMeasures,
            };
        });
    };

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const API_URL = process.env.BACKEND_URL || 'http://localhost:5000';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/submit-form`, formData);
            setShowModal(false);
            setShowSuccessMessage(true);
            setTimeout(() => setShowSuccessMessage(false), 3000);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50 overflow-hidden">
            <div className="bg-white p-12 rounded-2xl shadow-lg w-2/3 max-w-5xl overflow-auto max-h-full mt-28">
                <h3 className="text-3xl text-center font-bold mb-4 text-primary">New Member</h3>
                <h4 className="text-lg text-center font-semibold mb-8">Fraud proof your loved ones</h4>
                <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Name"
                        className="input input-bordered w-full mb-6 text-center bg-gray-200"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="input input-bordered w-full mb-6 text-center bg-gray-200"
                        required
                    />
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="input input-bordered w-full mb-6 text-center bg-gray-200"
                        required
                    />
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Age"
                        className="input input-bordered w-full mb-6 text-center bg-gray-200"
                        required
                    />
                    <select
                        name="relationship"
                        value={formData.relationship}
                        onChange={handleChange}
                        className="input input-bordered w-full mb-6 text-center bg-gray-200"
                        required
                    >
                        <option value="">Relationship</option>
                        <option value="wife">Wife</option>
                        <option value="husband">Husband</option>
                        <option value="mother">Mother</option>
                        <option value="father">Father</option>
                        <option value="grandfather">Grandfather</option>
                        <option value="grandmother">Grandmother</option>
                        <option value="brother">Brother</option>
                        <option value="sister">Sister</option>
                        <option value="child">Son</option>
                        <option value="child">Daughter</option>
                    </select>
                    <select
                        name="mostComfortableLanguage"
                        value={formData.mostComfortableLanguage}
                        onChange={handleChange}
                        className="input input-bordered w-full mb-6 text-center bg-gray-200"
                        required
                    >
                        <option value="">Most Comfortable Language</option>
                        <option value="english">English</option>
                        <option value="chinese">Chinese</option>
                        <option value="malay">Malay</option>
                        <option value="hindi">Hindi</option>
                        <option value="tamil">Tamil</option>
                        <option value="hokkien">Hokkien</option>
                        <option value="cantonese">Cantonese</option>
                        <option value="teochew">Teochew</option>
                    </select>
                    <div className="mb-6">
                        <label className="block font-bold mb-8 mt-10 text-2xl">Social Media Usage</label>
                        <div className="flex flex-col gap-4">
                            {['Facebook', 'Reddit', 'Instagram', 'TikTok', 'Youtube', 'Whatsapp'].map((platform) => (
                                <div key={platform} className="flex justify-between items-center border-b border-gray-300 pb-2">
                                    <span className="text-sm font-medium">{platform}</span>
                                    <input
                                        type="checkbox"
                                        value={platform.toLowerCase()}
                                        checked={formData.socialMedia.includes(platform.toLowerCase())}
                                        onChange={handleCheckboxChange}
                                        className="checkbox checkbox-primary"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block font-bold mb-8 mt-10 text-2xl">Background</label>
                        <div className="flex justify-between items-center mb-6">
                            <label className="flex-1 text-left mb-2">Currently working?</label>
                            <input
                                type="checkbox"
                                name="isCurrentlyWorking"
                                checked={formData.isCurrentlyWorking}
                                onChange={(e) => setFormData({ ...formData, isCurrentlyWorking: e.target.checked })}
                                className="checkbox checkbox-primary"
                            />
                        </div>
                    </div>

                    {formData.isCurrentlyWorking && (
                        <>
                            <input
                                type="text"
                                name="occupation"
                                value={formData.occupation}
                                onChange={handleChange}
                                placeholder="Occupation"
                                className="input input-bordered w-full mb-6 text-center bg-gray-200"
                                required
                            />
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                placeholder="Company Name"
                                className="input input-bordered w-full mb-6 text-center bg-gray-200"
                                required
                            />
                            <input
                                type="email"
                                name="workEmail"
                                value={formData.workEmail}
                                onChange={handleChange}
                                placeholder="Work Email"
                                className="input input-bordered w-full mb-6 text-center bg-gray-200"
                            />
                            <input
                                type="tel"
                                name="workPhone"
                                value={formData.workPhone}
                                onChange={handleChange}
                                placeholder="Work Phone"
                                className="input input-bordered w-full mb-6 text-center bg-gray-200"
                            />
                            <select
                                name="salaryRange"
                                value={formData.salaryRange}
                                onChange={handleChange}
                                className="input input-bordered w-full mb-6 text-center bg-gray-200"
                                required
                            >
                                <option value="">Salary Range</option>
                                <option value="under50k">Under $50,000</option>
                                <option value="50k-100k">$50,000 - $100,000</option>
                                <option value="100k-150k">$100,000 - $150,000</option>
                                <option value="150k-200k">$150,000 - $200,000</option>
                                <option value="over200k">Over $200,000</option>
                            </select>
                        </>
                    )}
                    <div className="flex justify-between items-center mb-6">
                        <label className="flex-1 text-left mb-4">Scammed before?</label>
                        <input
                            type="checkbox"
                            name="previousScamExperience"
                            checked={formData.previousScamExperience}
                            onChange={(e) => setFormData({ ...formData, previousScamExperience: e.target.checked })}
                            className="checkbox checkbox-primary"
                        />
                    </div>
                    {formData.previousScamExperience && (
                        <>
                            <input
                                type="text"
                                name="scammedPlatform"
                                value={formData.scammedPlatform}
                                onChange={handleChange}
                                placeholder="Scammed Platform"
                                className="input input-bordered w-full mb-6 text-center bg-gray-200"
                            />
                            <input
                                type="number"
                                name="scammedAmount"
                                value={formData.scammedAmount}
                                onChange={handleChange}
                                placeholder="Scammed Amount"
                                className="input input-bordered w-full mb-6 text-center bg-gray-200"
                            />
                        </>
                    )}
                    <div className="mb-6">
                        <label className="block font-bold mb-6 mt-10 text-xl">Current Protection Measures</label>
                        <div className="flex flex-wrap gap-4">
                            {['Antivirus', 'VPN', 'Two-factor Authentication', 'Firewall'].map((measure) => (
                                <div key={measure} className="flex justify-between items-center border-b border-gray-300 pb-2 w-full">
                                    <label className="flex-1 text-left">{measure}</label>
                                    <input
                                        type="checkbox"
                                        value={measure}
                                        checked={formData.protectionMeasures.includes(measure)}
                                        onChange={handleProtectionMeasuresChange}
                                        className="checkbox checkbox-primary"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <select
                        name="onlineTransactionFrequency"
                        value={formData.onlineTransactionFrequency}
                        onChange={handleChange}
                        className="input input-bordered w-full mb-14 text-center bg-gray-200 mt-4"
                        required
                    >
                        <option value="">Online Transaction Frequency</option>
                        <option value="never">Never</option>
                        <option value="rarely">Seldom</option>
                        <option value="occasionally">Everyday</option>
                        <option value="frequently">All the time</option>
                    </select>
                    <div className="flex justify-between space-x-4">
                        <button
                            type="submit"
                            className="btn btn-primary rounded-lg bg-orange-400 hover:bg-orange-600 py-2 text-lg font-bold px-6 w-1/2"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="btn btn-secondary rounded-lg bg-gray-100 hover:bg-gray-400 py-2 text-lg font-bold px-6 w-1/2 border-none mb-14"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
                {showSuccessMessage && <div className="text-center text-green-500 font-medium mt-4">Family member added successfully!</div>}
            </div>
        </div>
    );
}

export default RegistrationModal;
