
const config = class {
    heading = [];
    contentHeading;
    field = [];
    footer = []

    constructor(heading, contentHeading, field, footer, data) {
        this.contentHeading = contentHeading;
        this.heading = heading;
        this.field = field;
        this.footer = footer;
    }
}

export { config }
