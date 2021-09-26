import './components.css';

function Components(props) {
  let user = (
    <p>
      <i className="fa fa-check"></i>
      <b>{props.user}</b>
    </p>
  );

  let storage = (
    <p>
      <i className="fa fa-check"></i>
      {props.storage}
    </p>
  );

  let upProjects = (
    <p>
      <i className="fa fa-check"></i>
      Unlimited Public Projects
    </p>
  );

  let caccess = (
    <p>
      <i className="fa fa-check"></i>
      Community Access
    </p>
  );

  let privatePro;
  if (props.private)
    privatePro = (
      <p>
        <i className="fa fa-check"></i>
        Unlimited Private Projects
      </p>
    );
  else
    privatePro = (
      <p className="muted">
        <i className="fa fa-times"></i>
        Unlimited Private Projects
      </p>
    );

  let phone;
  if (props.phone)
    phone = (
      <p>
        <i className="fa fa-check"></i>
        Dedicated Phone Support
      </p>
    );
  else
    phone = (
      <p className="muted">
        <i className="fa fa-times"></i>
        Dedicated Phone Support
      </p>
    );

  let domain = props.domain;
  if (domain)
    domain = (
      <p>
        <i className="fa fa-check"></i>
        Free Subdomain
      </p>
    );
  else
    domain = (
      <p className="muted">
        <i className="fa fa-times"></i>
        Free Subdomain
      </p>
    );

  let report;
  if (props.report)
    report = (
      <p>
        <i className="fa fa-check"></i>
        Monthly Status Report
      </p>
    );
  else
    report = (
      <p className="muted">
        <i className="fa fa-times"></i>Monthly Status Reports
      </p>
    );
  return (
    <>
      <div className="card">
        <div className="header">
          <p className="card_type">{props.cardType}</p>
        </div>
        <div className="price">
          <h1>
            ${props.cost}
            <span className="smallPrice"> / Month</span>
          </h1>
        </div>
        <hr />
        <ul>
          <li>{user}</li>
          <li>{storage}</li>
          <li>{upProjects}</li>
          <li>{caccess}</li>
          <li>{privatePro}</li>
          <li>{phone}</li>
          <li>{domain}</li>
          <li>{report}</li>
        </ul>
        <button className="button">Button</button>
      </div>
    </>
  );
}

export default Components;
