import './Notification.scss';

export default function Notification() {
    const show = true;

    if( !show ) {
        return null;
    }

    return (
        <div className="alert-info">
            <strong>Attention:</strong> Vous êtes actuellement dans l'environnement 
            de développement 
        </div>
    )
}