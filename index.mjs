import { log } from "./log.mjs";

export const handler = async(event) => {

    log('Adicionando Log de execução após github action com Váriavel de Ambiente  . event: ' + JSON.stringify(event));

    return {
        statusCode: 200,
        body: JSON.stringify(event),
        Headers: {
            'Content-Type': 'application/json'
        }
    };
};
