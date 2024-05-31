import React, { useState } from 'react';

function RegistrationModal({ showModal, setShowModal }) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        age: '',
        gender: '',
        relationship: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setShowModal(false); // Close the popup on form submit
    };

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-12 rounded-2xl shadow-lg w-11/12 max-w-5xl overflow-auto max-h-full">
                <h3 className="text-3xl text-center font-bold mb-8 text-black">Register New Member</h3>
                <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Full Name"
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
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="input input-bordered w-full mb-6 text-center bg-gray-200"
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <select
                        name="relationship"
                        value={formData.relationship}
                        onChange={handleChange}
                        className="input input-bordered w-full mb-6 text-center bg-gray-200"
                        required
                    >
                        <option value="">Select Relationship</option>
                        <option value="wife">Wife</option>
                        <option value="husband">Husband</option>
                        <option value="mother">Mother</option>
                        <option value="father">Father</option>
                        <option value="grandfather">Grandfather</option>
                        <option value="grandmother">Grandmother</option>
                        <option value="brother">Brother</option>
                        <option value="sister">Sister</option>
                        <option value="child">Child</option>
                        <option value="other">Other</option>
                    </select>
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2">Social Media Usage</label>
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
                    <div className="flex items-center mb-6">
                        <input
                            type="checkbox"
                            name="isCurrentlyWorking"
                            checked={formData.isCurrentlyWorking}
                            onChange={(e) => setFormData({ ...formData, isCurrentlyWorking: e.target.checked })}
                            className="checkbox checkbox-primary"
                        />
                        <label className="ml-2">Is this person currently working?</label>
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
                                <option value="">Select Salary Range</option>
                                <option value="under50k">Under $50,000</option>
                                <option value="50k-100k">$50,000 - $100,000</option>
                                <option value="100k-150k">$100,000 - $150,000</option>
                                <option value="150k-200k">$150,000 - $200,000</option>
                                <option value="over200k">Over $200,000</option>
                            </select>
                        </>
                    )}
                    <div className="flex items-center mb-6">
                        <input
                            type="checkbox"
                            name="previousScamExperience"
                            checked={formData.previousScamExperience}
                            onChange={(e) => setFormData({ ...formData, previousScamExperience: e.target.checked })}
                            className="checkbox checkbox-primary"
                        />
                        <label className="ml-2">Have you been scammed before?</label>
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
            <label className="block text-sm font-bold mb-2">Current Protection Measures</label>
            <div className="flex flex-wrap gap-4">
              {['Antivirus', 'VPN', 'Two-factor Authentication', 'Firewall'].map((measure) => (
                <div key={measure} className="flex justify-between items-center border-b border-gray-300 pb-2">
                  <input
                    type="checkbox"
                    value={measure}
                    checked={formData.protectionMeasures.includes(measure)}
                    onChange={handleProtectionMeasuresChange}
                    className="checkbox checkbox-primary"
                  />
                  <label className="ml-2">{measure}</label>
                </div>
              ))}
            </div>
          </div>
          <select
            name="onlineTransactionFrequency"
            value={formData.onlineTransactionFrequency}
            onChange={handleChange}
            className="input input-bordered w-full mb-10 text-center bg-gray-200"
            required
          >
            <option value="">Online Transaction Frequency</option>
            <option value="rarely">Rarely</option>
            <option value="occasionally">Occasionally</option>
            <option value="frequently">Frequently</option>
          </select>
          <div className="flex justify-between space-x-4">
            <button
              type="submit"
              className="btn btn-primary rounded-lg bg-orange-400 hover:bg-orange-600 py-2 text-lg font-bold px-6"
            >
              Register
            </button>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="btn btn-secondary rounded-lg bg-gray-300 hover:bg-gray-400 py-2 text-lg font-bold px-6"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationModal;
