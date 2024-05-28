import React from 'react';
import '../styles/globals.scss';

export default function Profile(props) {
  return (
    <div className="card w-25 pt-3 card-custom mx-auto text-center">
      <img className="card-img img-custom mx-auto" src={props.img} alt="Card image cap" />
      <div className="card-body">
        <h4 className="card-title">{props.name}</h4>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.job}</li>
        <li className="list-group-item">{props.number}</li>
        <li className="list-group-item">{props.email}</li>
      </ul>
      <div className="links-buttons">
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="pt-3 list-group-item">
          <button className="btn btn-outline-secondary">LinkedIn</button>
        </a>
        <a href={props.git} target="_blank" rel="noopener noreferrer" className="pt-2 list-group-item">
          <button className="btn btn-outline-secondary">GitHub</button>
        </a>
        <a href={props.insta} target="_blank" rel="noopener noreferrer" className="pt-2 pb-2 list-group-item">
          <button className="btn btn-outline-secondary">Instagram</button>
        </a>
      </div>
    </div>
  );
}
