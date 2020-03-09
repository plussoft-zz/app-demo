import React, { useState } from 'react';
import { Drawer } from '@material-ui/core';

const Demo = () => {
    const [open, setOpen] = useState(true);

    return (
    <Drawer anchor="right" open={open} onClose={() => setOpen(!open)}>
        Hello 2
    </Drawer>
    )
}

export default Demo