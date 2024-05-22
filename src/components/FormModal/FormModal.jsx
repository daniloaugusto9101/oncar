import React from 'react';
import usePostCar from '../../hooks/usePostCars';
import { GlobalCars } from '../../storage/GlobalCars';
import useFetchCars from '../../hooks/useFetchCars';

const FormModal = () => {
    const { postCar } = usePostCar();
    const { fetchCars } = useFetchCars();
    const { isOpen, setIsOpen } = React.useContext(GlobalCars);

    const [data, setData] = React.useState({
        img: '',
        modelo: '',
        marca: '',
        ano: '',
        totkm: '',
        valor: '',
        // descricao: "",
    });

    const valorInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const sendCar = (e) => {
        e.preventDefault();
        postCar(data)
            .then(() => {
                fetchCars();
                setIsOpen(!isOpen);
            })
            .catch((error) => {
                console.error(`Erro ao adicionar carro: ${error}`);
            });
    };

    return (
        <form onSubmit={sendCar}>
            <div className="flex flex-col gap-4">
                <div>
                    <p className="mb-2">
                        URL imagen
                        <span className="text-red-600"> *</span>
                    </p>
                    <input
                        type="text"
                        name="img"
                        className="w-full border p-2 bg-gray-100 rounded-sm"
                        onChange={valorInput}
                        required={true}
                    />
                </div>
                <div>
                    <div>
                        <p className="mb-2">
                            Modelo
                            <span className="text-red-600"> *</span>
                        </p>
                        <input
                            type="text"
                            name="modelo"
                            className="w-full border p-2 bg-gray-100 rounded-sm"
                            onChange={valorInput}
                            required={true}
                        />
                    </div>
                    <p className="mb-2">
                        Marca
                        <span className="text-red-600"> *</span>
                    </p>
                    <input
                        type="text"
                        name="marca"
                        className="w-full border p-2 bg-gray-100 rounded-sm"
                        onChange={valorInput}
                        required={true}
                    />
                </div>

                <div>
                    <p className="mb-2">
                        Ano
                        <span className="text-red-600"> *</span>
                    </p>
                    <input
                        type="text"
                        name="ano"
                        className="w-full border p-2 bg-gray-100 rounded-sm"
                        onChange={valorInput}
                        required={true}
                    />
                </div>
                <div className="flex gap-4">
                    <div>
                        <p className="mb-2">
                            Km
                            <span className="text-red-600"> *</span>
                        </p>
                        <input
                            type="number"
                            name="totkm"
                            className="w-full border p-2 bg-gray-100 rounded-sm"
                            onChange={valorInput}
                            required={true}
                        />
                    </div>
                    <div>
                        <p className="mb-2">
                            Valor
                            <span className="text-red-600"> *</span>
                        </p>
                        <input
                            type="number"
                            name="valor"
                            className="w-full border p-2 bg-gray-100 rounded-sm"
                            onChange={valorInput}
                            required={true}
                        />
                    </div>
                </div>
                {/* <textarea
          placeholder="Descrição"
          name="descricao"
          onChange={valorInput}
          className="w-full border p-2 bg-gray-100 rounded-sm"
          required={true}
        /> */}
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 transition-all flex items-center justify-center border p-3 gap-2 cursor-pointer">
                    <p>Cadastrar</p>
                </button>
            </div>
        </form>
    );
};

export default FormModal;
