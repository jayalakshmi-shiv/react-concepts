import React, { useEffect, useState, useContext } from 'react'
import { Prompt, useLocation, useHistory } from "react-router-dom";
import { Context } from '../Context/promptProvider';
function PromptMsg() {
    const { showPrompt } = useContext(Context);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const location = useLocation();
    const history = useHistory();
    const [lastLocation, setLastLocation] = useState(location);
    const [shouldUnload, setShouldUnload] = useState(false);
    const [confirmedNavigation, setConfirmedNavigation] = useState(false);
    const closeModal = () => {
        setIsModalOpen(false);
        setShouldUnload(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const showModal = (nextLocation) => {
        openModal();
        setLastLocation(nextLocation);
    };
    const handleBlockedRoute = (nextLocation) => {
        if (!confirmedNavigation && showPrompt) {
            showModal(nextLocation);
            return false;
        }

        return true;
    };
    const handleConfirmNavigationClick = () => {
        closeModal();
        setConfirmedNavigation(true);
    };

    // Block react routes
    useEffect(() => {
        if (confirmedNavigation && lastLocation) {
            // Navigate to the previous blocked location with your navigate function
            setShouldUnload(true);
            history.push(lastLocation.pathname);
        }
    }, [confirmedNavigation, lastLocation, history]);

    return (
        <>
            <Prompt when message={handleBlockedRoute} />
        </>
    )
}

export default PromptMsg