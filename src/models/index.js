import ExampleModel from "./example.model.js";




const models = [
    ExampleModel
];


// Senkronizasyon işlemini gerçekleştirme
export const syncModels = async () => {
    try {
        for (const model of models) {
            await model.sync();
        }
        console.log('Tablolar başarıyla senkronize edildi.');
    } catch (error) {
        console.error('Hata:', error);
    }
};

export default models;
