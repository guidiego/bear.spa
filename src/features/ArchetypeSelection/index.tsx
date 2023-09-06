import Flicking from "@egjs/react-flicking";
import { styled, Button} from "@lessonnine/design-system.lib";
import { ArchetypeCard } from "../../components/ArchetypeCard";
import { content } from "./content";
import { LearnerType } from "./types";
import { useEffect, useMemo, useState } from "react";
import { getAccountArchetype } from "./api";

const Panel = styled.div`
  margin: 0 8px;
`

const BottomNav = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    padding: 24px 36px;
`

const useBaseData = () => {
    const [data, setData] = useState<LearnerType | null>(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getAccountArchetype().then((a) => {
            setData(a);
        }).catch((e) => {
            setError(e);
        }).finally(() => {
            setLoading(false)
        })
    }, []);

    return { data, isLoading, error }
}
export const ArchetypeSelection = () => {
    const {
        isLoading,
        data: recommended
    } = useBaseData();

    const [keys, recommendedIndex]: [LearnerType[], number] = useMemo(() => {
        const k = Object.keys(content) as LearnerType[];

        if (!recommended) {
            return [k, 0]
        }

        return [k, k.indexOf(recommended)]
    }, [recommended])

    if (!recommended || isLoading) {
        return null;
    }

    return (
        <>
            <Flicking
                circular
                defaultIndex={window.innerWidth > 1000 ? 2 : recommendedIndex}
                inputType={["touch", "mouse"]}
                disableOnInit={window.innerWidth > 1640}
            >
                {
                    keys.map((t, i) => (
                        <Panel key={i}>
                            <ArchetypeCard {...content[t]} recommended={t === recommended} />
                        </Panel>
                    ))
                }
            </Flicking>
            <BottomNav>
                <Button fullWidth>
                    Found my learner type!
                </Button>
            </BottomNav>
        </>
    )
}