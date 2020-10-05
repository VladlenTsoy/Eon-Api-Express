module.exports = (settings, disciplineId, taskId) => {
    if (disciplineId === 1) {
        switch (taskId) {
            case 1:
            case 3:
                return settings.times;
            case 2:
            case 4:
                return settings.mode === 'divide' || settings.mode === 'multiply' ?
                    settings.tables * settings.column * settings.rows :
                    settings.tables * settings.column;
            case 5:
            case 23:
                return settings.anzan === 'list' ?
                    (settings.mode === 'divide' || settings.mode === 'multiply' ?
                            settings.tables * settings.column * settings.rows :
                            settings.tables * settings.column
                    ) : settings.times;
            case 24:
                return settings.type_task === 'basic' ?
                    settings.times :
                    (settings.mode === 'plus-minus' ?
                            settings.tables * settings.column * settings.rows :
                            settings.tables * settings.column * settings.rows
                    );
            case 6:
            case 17:
            case 22:
                return settings.count;
        }
    } else if (disciplineId === 2)
        switch (taskId) {
            case 7:
            case 15:
                return settings.several.reduce((a, several) => a + several.count);
            case 16:
                return settings.count * 10;
            default:
                return settings.count;
        }
    return 0;
}