import React, { useContext, useState } from 'react';
import { APIContext } from '../../context/APIContext';
import Categories from './Categories';

function Urlap() {
    const { CList, postAdat } = useContext(APIContext);
    const [adat, setAdat] = useState({
        title: "",
        price: 50,
        category: "",
        description: "",
        image: "",
    });
    const [errors, setErrors] = useState({});

    function validate() {
        const newErrors = {};
        if (adat.title.length < 3 || adat.title[0] !== adat.title[0].toUpperCase()) {
            newErrors.title = "A névnek legalább 3 karakter hosszúnak kell lennie, és nagybetűvel kell kezdődnie!";
        }
        if (adat.price < 15 || adat.price > 99) {
            newErrors.price = "Az árnak 15 és 99 közötti értéknek kell lennie!";
        }
        if (!adat.category) {
            newErrors.category = "Kérjük, válasszon kategóriát!";
        }
        if (adat.description.length < 10) {
            newErrors.description = "A leírásnak legalább 10 karakter hosszúnak kell lennie!";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function adatKuld(event) {
        event.preventDefault();

        if (validate()) {
            console.log("Küldés!", adat);
            postAdat("/products", adat);
        } else {
            console.log("Hibás adatok!", errors);
        }
    }

    function valtozasKezeles(event) {
        const ujAdat = { ...adat };
        ujAdat[event.target.id] = event.target.value;
        setAdat(ujAdat);
    }

    return (
        <form onSubmit={adatKuld}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Nazwa produktu</label>
                <input type="text" value={adat.title} onChange={valtozasKezeles} className="form-control" id="title" placeholder="Kiscica"/>
                {errors.title && <div className="text-danger">{errors.title}</div> /*hibát jelez, amennyiben nincs beírva név*/}
                <div id="title" className="form-text">Zaczyna się z dużej litery, co najmniej 3 litery!</div>
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Cena produktu</label>
                <input type="number" min="15" max="99" value={adat.price} onChange={valtozasKezeles} className="form-control" id="price"/>
                {errors.price && <div className="text-danger">{errors.price}</div> /*hibát jelez, amennyiben nincs beírva összeg*/} 
            </div>
            <div className="form-group mb-3">
                <label htmlFor="category">Kategoria produktu</label>
                <select className="form-control" id="category" value={adat.category} onChange={valtozasKezeles}>
                    <option value="">Válasszon érvényes kategóriát!</option>
                    {CList.map((elem, index) => (
                        <Categories elem={elem} key={index} adat={adat} />
                    ))}
                </select>
                {errors.category && <div className="text-danger">{errors.category}</div> /*hibát jelez, amennyiben nincs kiválasztva kategória*/} 
            </div>
            <div className="form-group mb-3">
                <label htmlFor="description">Opis produktu</label>
                <textarea className="form-control" value={adat.description} onChange={valtozasKezeles} id="description" name="description" rows="4" cols="50" placeholder="szülessen meg a leírás"></textarea>
                {errors.description && <div className="text-danger">{errors.description}</div> /*hibát jelez, amennyiben nincs beírva leírás*/}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Urlap;
