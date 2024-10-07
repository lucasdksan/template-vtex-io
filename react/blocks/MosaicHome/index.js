import { useRuntime } from "vtex.render-runtime";
import { schema } from "./schema";

const MosaicHome = ({ MosaicContainer, mosaic_list, mosaic_title })=> {
    const {
        deviceInfo: { isMobile },
    } = useRuntime();

    if(mosaic_list.length === 0) return null;

    return (
        <MosaicContainer>
            <div>
                <span>{mosaic_title}</span>
                <div>
                    { 
                        isMobile ? 
                        (<>
                            { mosaic_list.map((item, _)=> {
                                return(
                                    <img src={item.mosaic_image_mobile} alt={item.alt} />
                                )
                            }) }
                        </>) : 
                        (<div>

                        </div>) 
                    }
                </div>
            </div>
        </MosaicContainer>
    );
}

MosaicHome.schema = schema;

export default MosaicHome;