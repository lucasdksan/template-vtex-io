export const schema = {
    title: "Mosaico da Home Page",
    type: "object",
    properties: {
        mosaic_list: {
            title: "Lista de Elementos do Mosaico",
            type: "array",
            default: [],
            items: {
                title: "Item do Mosaico",
				type: "object",
				properties: {
                    mosaic_image_desktop: {
                        title: "Imagem desktop",
                        type: "string",
                        widget: {
                            "ui:widget": "image-uploader",
                        },
                        default: "",
                    },
                    mosaic_image_mobile: {
                        title: "Imagem mobile",
                        type: "string",
                        widget: {
                            "ui:widget": "image-uploader",
                        },
                        default: "",
                    },
                    alt: {
                        title: "Texto alternativo da imagem",
						type: "string",
						description: "",
						default: "",
                    }
                }
            }
        },
        mosaic_title: {
            title: "Título do Mosaico",
            type: "string",
            description: "",
            default: "",
        }
    }
}