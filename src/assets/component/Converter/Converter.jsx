import './Converter.css';
import {useState} from "react";

export const Converter = function () {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [count, setCount] = useState(0);

    function handleSubmit() {

        switch (true) {

            case input === 'metre' && output === 'decimetre':
                setCount(count * 10)
                break;

            case input === 'metre' && output === 'centimetre':
                setCount(count * 100)
                break;

            case input === 'metre' && output === 'millimetre':
                setCount(count * 1000)
                break;

            case input === 'decimetre' && output === 'metre':
                setCount(count / 10)
                break;

            case input === 'decimetre' && output === 'centimetre':
                setCount(count * 10)
                break;

            case input === 'decimetre' && output === 'millimetre':
                setCount(count * 100)
                break;

            case input === 'centimetre' && output === 'metre':
                setCount(count / 100)
                break;

            case input === 'centimetre' && output === 'decimetre':
                setCount(count / 10)
                break;

            case input === 'centimetre' && output === 'millimetre':
                setCount(count * 10)
                break;

            case input === 'millimetre' && output === 'metre':
                setCount(count / 1000)
                break;

            case input === 'millimetre' && output === 'decimetre':
                setCount(count / 100)
                break;

            case input === 'millimetre' && output === 'centimetre':
                setCount(count / 10)
                break;

            case input === 'litre' && output === 'decilitre':
                setCount(count * 10)
                break;

            case input === 'litre' && output === 'centilitre':
                setCount(count * 100)
                break;

            case input === 'litre' && output === 'millilitre':
                setCount(count * 1000)
                break;

            case input === 'decilitre' && output === 'litre':
                setCount(count / 10)
                break;

            case input === 'decilitre' && output === 'centilitre':
                setCount(count * 10)
                break;

            case input === 'decilitre' && output === 'millilitre':
                setCount(count * 100)
                break;

            case input === 'centilitre' && output === 'litre':
                setCount(count / 100)
                break;

            case input === 'centilitre' && output === 'decilitre':
                setCount(count / 10)
                break;

            case input === 'centilitre' && output === 'millilitre':
                setCount(count * 10)
                break;

            case input === 'millilitre' && output === 'litre':
                setCount(count / 1000)
                break;

            case input === 'millilitre' && output === 'decilitre':
                setCount(count / 100)
                break;

            case input === 'millilitre' && output === 'centilitre':
                setCount(count / 10)
                break;
        }
    }

    function handleReset() {
        window.location.reload();
    }

    return (
        <div className='convertisseur'>
            <div className='conv-input'>
                <label htmlFor="">Entrez une valeur a convertir</label><br/>
                <div className='input-area'>
                    <input type="number" onChange={event => setCount(event.target.value)}/>
                    <label htmlFor="device-start-select">From</label>
                    <select name="device-start" id="device-start-select" onBlur={event => setInput(event.target.value)}>
                        <option value="0">-choose a value-</option>
                        <option value="metre">Mètre (m)</option>
                        <option value="decimetre">Décimètre (dm)</option>
                        <option value="centimetre">Centimètre (cm)</option>
                        <option value="millimetre">Millimètre (mm)</option>
                        <option value="litre">Litre (l)</option>
                        <option value="decilitre">Décilitre (dl)</option>
                        <option value="centilitre">Centilitre (cl)</option>
                        <option value="millilitre">Millilitre (ml)</option>
                    </select>
                    <label htmlFor="device-start-end">To</label>
                    <select name="device-start" id="device-start-end" onBlur={event => setOutput(event.target.value)}>
                        <option value="">-choose a value-</option>
                        {
                            input === 'metre' || input === 'decimetre' || input === 'centimetre' || input === 'millimetre' ?
                                <>
                                    <option value="metre">Mètre (m)</option>
                                    <option value="decimetre">Décimètre (dm)</option>
                                    <option value="centimetre">Centimètre (cm)</option>
                                    <option value="millimetre">Millimètre (mm)</option>
                                </>:

                            input === 'litre' || input === 'decilitre' || input === 'centilitre' || input === 'millilitre' ?
                                <>
                                <option value="litre">Litre (l)</option>
                                <option value="decilitre">Décilitre (dl)</option>
                                <option value="centilitre">Centilitre (cl)</option>
                                <option value="millilitre">Millilitre (ml)</option>
                                </>: ''
                        }
                    </select>

                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
            <div className='button-area'>
                <button onClick={handleSubmit}>Validez</button>
            </div>
            <div className="result">
                <h3>Resultat de la conversion:</h3>
                <input type="number" readOnly value={count} />
            </div>
        </div>
    );
}