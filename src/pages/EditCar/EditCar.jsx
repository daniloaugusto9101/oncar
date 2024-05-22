import React, { useEffect, useState } from 'react';
import EditCarForm from '../../components/EditCarForm/EditCarForm'; // Nome do novo componente de formulário de edição
import CarsServices from '../../services/CarsServices';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditCar = () => {
    const { carId } = useParams();
    const [carData, setCarData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCarData = async () => {
            try {
                const response = await CarsServices.getCarDetails(carId);
                setCarData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao carregar os dados do carro:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchCarData();
    }, [carId]);

    const handleEditCar = async (updatedCarData) => {
        try {
            const response = await CarsServices.editCar(carId, updatedCarData);
            console.log('Carro editado com sucesso:', response.data);
            navigate('/oncar');
        } catch (error) {
            console.error('Erro ao editar o carro:', error);
        }
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Ocorreu um erro ao carregar os dados do carro.</div>;
    }

    return (
        <div className="p-4 mt-6 max-w-3xl m-auto border">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl">Editar Carro</h2>
            </div>
            {carData && (
                <EditCarForm
                    initialCarData={carData}
                    onSubmit={handleEditCar}
                    buttonText="Salvar Alteração"
                />
            )}
        </div>
    );
};

export default EditCar;
