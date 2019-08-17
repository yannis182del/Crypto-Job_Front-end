import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import config from '../config/config';

const urlApi = config.MailCHIMP_API;
// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div className="main-div">
      {status === 'sending' && <div style={{ color: 'blue' }}>Envoie...</div>}
      {status === 'error' && (
        <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />
      )}
      {status === 'success' && (
        <div
          className="success-message"
          style={{ color: '#3EECAC', marginLeft: '16px' }}
          dangerouslySetInnerHTML={{ __html: 'Merci !' }}
        />
      )}

      <br />
      <div className="input-contain">
        <input
          className="email-input"
          ref={node => (email = node)}
          type="email"
          placeholder="Adresse email.."
        />
        <br />
        <button type="submit" className="subscribe-button" onClick={submit}>
          <span className="button-text">M'informer</span>
        </button>
      </div>
    </div>
  );
};

const Form = () => {
  const url = urlApi;
  return (
    <div>
      <h3 className="form-title">Restez Informés</h3>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default Form;
