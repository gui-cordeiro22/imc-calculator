// Dependencies
import { FunctionComponent } from "react";

// Types
import { ButtonProps } from "./button.types";

// Styles
import { Container, ContentWrapper, Content, Loader } from "./button.styles";

// Components
import { ConditionallyRender } from "../../utilities/conditionally-render";

// Utils
import { ternary } from "../../../utils/ternary";

export const Button: FunctionComponent<ButtonProps> = ({
    label,
    variant = "cta",
    variantType = "primary",
    borderType = "rounded",
    alignment = "center",
    size = "medium",
    rightIconElement,
    leftIconElement,
    additionalContentComposition,
    isFullyAdaptative = false,
    isDisabled = false,
    isLoading = false,
    hasSpacing = true,
    hasUnderline = false,
    handleClick,
    ...buttonDefaultProps
}) => {
    return (
        <Container
            className="pdg-button"
            borderType={borderType}
            variantType={variantType}
            variant={variant}
            size={size}
            isFullyAdaptative={isFullyAdaptative}
            isDisabled={isDisabled || isLoading}
            hasSpacing={hasSpacing}
            hasUnderline={hasUnderline}
            {...(!isDisabled && !isLoading && { onClick: () => !!handleClick && handleClick() })}
            {...buttonDefaultProps}
        >
            <ContentWrapper isVisible={!isLoading} alignment={alignment}>
                <ConditionallyRender shouldRender={!!leftIconElement} content={leftIconElement} />

                <ConditionallyRender
                    shouldRender={!!label || !!additionalContentComposition}
                    content={
                        <Content>
                            <ConditionallyRender shouldRender={!!label} content={label} />

                            <ConditionallyRender shouldRender={!!additionalContentComposition} content={additionalContentComposition} />
                        </Content>
                    }
                />

                <ConditionallyRender shouldRender={!!rightIconElement} content={rightIconElement} />
            </ContentWrapper>

            <ConditionallyRender
                shouldRender={isLoading}
                content={
                    <Loader color="#FFF">
                        <div>
                            <div />
                            <div />
                            <div />
                            <div />
                        </div>
                    </Loader>
                }
            />
        </Container>
    );
};
