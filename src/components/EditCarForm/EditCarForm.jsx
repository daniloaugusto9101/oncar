import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EditCarForm = ({ initialCarData, onSubmit, buttonText }) => {
    const [formData, setFormData] = useState(initialCarData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label
                    htmlFor="img"
                    className="block text-sm font-medium text-gray-700">
                    URL da Imagem
                </label>
                <input
                    type="text"
                    id="img"
                    name="img"
                    value={formData.img}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="modelo"
                    className="block text-sm font-medium text-gray-700">
                    Modelo
                </label>
                <input
                    type="text"
                    id="modelo"
                    name="modelo"
                    value={formData.modelo}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="marca"
                    className="block text-sm font-medium text-gray-700">
                    Marca
                </label>
                <input
                    type="text"
                    id="marca"
                    name="marca"
                    value={formData.marca}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="ano"
                    className="block text-sm font-medium text-gray-700">
                    Ano
                </label>
                <input
                    type="text"
                    id="ano"
                    name="ano"
                    value={formData.ano}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="totkm"
                    className="block text-sm font-medium text-gray-700">
                    Km
                </label>
                <input
                    type="number"
                    id="totkm"
                    name="totkm"
                    value={formData.totkm}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="valor"
                    className="block text-sm font-medium text-gray-700">
                    Valor
                </label>
                <input
                    type="number"
                    id="valor"
                    name="valor"
                    value={formData.valor}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded-md w-full"
                />
            </div>
            <div className="flex justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md">
                    {buttonText}
                </button>
                <Link
                    to={`/oncar`}
                    className="text-gray-600 border border-gray-600 px-3 py-2 rounded-md hover:bg-gray-600 hover:text-white transition-all">
                    Voltar
                </Link>
            </div>
        </form>
    );
};

export default EditCarForm;
