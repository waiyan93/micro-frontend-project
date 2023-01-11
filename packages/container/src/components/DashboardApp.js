import React, { useEffect, useRef } from 'react';
import { mount } from 'dashboard/DashboardApp';

export default function () {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    }, []);

    return (
        <div ref={ref}></div>
    )
}