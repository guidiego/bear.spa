import { Layout, ShortText, Card, styled, Badge, IconCrownSimple } from "@lessonnine/design-system.lib";
import React from "react";

const CustomCard = styled(Card)`
  background: #FFF;
  width: 300px;
  margin-bottom: 20px;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;

  & > img {
    width: 100%;
  }
`

const RecommendedBadge = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`

export type ArchetypeCardContent = {
    title: string;
    image: string;
    description: string;
}

type Props = ArchetypeCardContent & {
    recommended: boolean
}

export const ArchetypeCard: React.FC<Props> = ({
    title, image, description, recommended
}) => (
    <CustomCard>
        <Layout direction="stack" align="center" alignItems="center" gap={16}>
            <ImageWrapper>
                {
                    recommended && (
                        <RecommendedBadge>
                            <Badge color="translucent-dark" icon={<IconCrownSimple />} title="Babbel's Choice">
                                Recommended For You!
                            </Badge>
                        </RecommendedBadge>
                    )
                }
                <img src={image} />
            </ImageWrapper>
            <ShortText size="large" weight="strong">
                {title} Learner
            </ShortText>
            <Layout padding={[0, 16, 16]}>
                <ShortText wordBreak color="subdued2">{description}</ShortText>
            </Layout>
        </Layout>
    </CustomCard>
)