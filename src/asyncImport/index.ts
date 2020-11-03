window.addEventListener('load', async () => {
    const { logger } = await import('./export');
    logger();
});

