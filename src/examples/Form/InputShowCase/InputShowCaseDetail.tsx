/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Input from "../../../components/Form/Input/Input"
import InputNumeric from "../../../components/Form/Input/InputNumeric"
import InputPassword from "../../../components/Form/Input/InputPassword"
import InputTextArea from "../../../components/Form/Input/InputTextArea"
import Label from "../../../components/Form/Label/Label"
import DetailComponentPage, { Title, Description }
    from "../../_Layout/DetailComponentPage/DetailComponentPage"
import { DetailComponentPageStyled }
    from "../../_Layout/DetailComponentPage/DetailComponentPageStyled"
import { IconPosition } from "../../../components/CommonTypes"
import { ReactComponent as CircleIcon } from "../../../assets/icons/circle.svg"
import { InputSize } from "../../../components/Form/Input/InputCommon"


const InputShowCaseDetail = () => {
    const { t, } = useTranslation()
    const { t: t_PageInput, } = useTranslation("PageComponentInput")

    const [inputStringState, setInputStringState,] = useState("")
    const [inputStringStateFilled, setInputStringStateFilled,] = useState(t_PageInput("label"))
    const [inputNumericState, setInputNumericState,] = useState<number | null>(1)
    const [inputAmountState, setInputAmountState,] = useState<number | null>(1)


    return <DetailComponentPage>
        <Title title={t_PageInput("mainSection.title")}>
            {t_PageInput("mainSection.description")}
        </Title>
        <Description title={t_PageInput("typesSection.title")}
            description={t_PageInput("typesSection.description")}
            componentList={[
                {
                    name: t("common.standard"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <Input
                            type="text"
                            value={inputStringState}
                            onChange={setInputStringState}
                            placeholder={`${t_PageInput("label")}`}
                        />
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
                {
                    name: t_PageInput("prefix"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <InputNumeric
                            value={inputAmountState}
                            leadingLabel="$"
                            onChange={setInputAmountState}
                            step={0.01}
                            customStyles={{
                                textAlign: "right",
                            }}
                        />
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
                {
                    name: t_PageInput("textarea"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <InputTextArea
                            value={inputStringState}
                            onChange={setInputStringState}
                            maxLength={100}
                            placeholder={`${t_PageInput("label")}`}
                        />
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
                {
                    name: t_PageInput("password"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <InputPassword
                            value={inputStringState}
                            onChange={setInputStringState}
                            placeholder={`${t_PageInput("label")}`}
                        />
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
            ]}
        />
        <Description title={t_PageInput("stateSection.title")}
            description={t_PageInput("stateSection.description")}
            componentList={[
                {
                    name: t_PageInput("unfilled"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <Input
                            type="text"
                            value={inputStringState}
                            onChange={setInputStringState}
                            placeholder={`${t_PageInput("label")}`}
                        />
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
                {
                    name: t_PageInput("filled"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <Input
                            type="text"
                            value={inputStringStateFilled!}
                            onChange={setInputStringStateFilled}
                            placeholder={`${t_PageInput("label")}`}
                        />
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
                {
                    name: t("common.disabled"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <Input
                            type="text"
                            value={inputStringState}
                            placeholder={`${t_PageInput("label")}`}
                            disabled
                        />
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
                {
                    name: t("common.error"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <Input
                            type="text"
                            value={inputStringState}
                            onChange={setInputStringState}
                            placeholder={`${t_PageInput("label")}`}
                            errorMessage={inputStringState ? undefined : "Cannot be empty"}
                        />
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
                {
                    name: t("common.loading"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <Input
                            type="text"
                            value={inputStringState}
                            isLoading
                        />
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
            ]}
        />
        <Description title={t_PageInput("variantSection.title")}
            description={t_PageInput("variantSection.description")}
            componentList={[
                {
                    name: t_PageInput("withIcon"),
                    component: <>
                        <Input
                            type="text"
                            value={inputStringState}
                            onChange={setInputStringState}
                            icon={{
                                SVGComponent: CircleIcon,
                                position: IconPosition.right,
                            }}
                            placeholder={`${t_PageInput("label")}`}
                        />
                    </>,
                },
            ]}
        />
        <Description title={t_PageInput("sizeSection.title")}
            componentList={[
                {
                    name: t_PageInput("small"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <Input
                            type="text"
                            value={inputStringState}
                            onChange={setInputStringState}
                            customStyles={{ size: InputSize.Small, }}
                            placeholder={`${t_PageInput("label")}`}
                        />
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
                {
                    name: t_PageInput("base"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <Input
                            type="text"
                            value={inputStringState}
                            onChange={setInputStringState}
                            customStyles={{ size: InputSize.Medium, }}
                            placeholder={`${t_PageInput("label")}`}
                        />
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
                {
                    name: t_PageInput("large"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <Input
                            type="text"
                            value={inputStringState}
                            onChange={setInputStringState}
                            customStyles={{ size: InputSize.Large, }}
                            placeholder={`${t_PageInput("label")}`}
                        />
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
                {
                    name: t_PageInput("xLarge"),
                    component: <DetailComponentPageStyled.ContainerForInputs>
                        <Input
                            type="text"
                            value={inputStringState}
                            onChange={setInputStringState}
                            customStyles={{ size: InputSize.Xlarge, }}
                            placeholder={`${t_PageInput("label")}`}
                        />
                    </DetailComponentPageStyled.ContainerForInputs>,
                },
            ]}
        />
        {/* <Label text="Input text">
            <Input
                type="text"
                value={inputStringState}
                onChange={setInputStringState}
                accessibility={{ autoFocus: true, }}
                placeholder="Text"
            />
        </Label>
        <hr />
        <Label text="Input numeric">
            <InputNumeric
                value={inputNumericState}
                onChange={setInputNumericState}
                placeholder="0"
            />
        </Label>

        <hr />
        <Label disabled text="Input disabled">
            <Input
                type="text"
                value={""}
                disabled
            />
        </Label>
        <hr />
        <Label text="Input with leading label">
            <InputNumeric
                value={inputAmountState}
                leadingLabel="$"
                onChange={setInputAmountState}
                step={0.01}
                customStyles={{
                    textAlign: "right",
                }}
            />
        </Label>
        <hr />
        <Label text="Input with custom styles">
            <Input
                type="text"
                value={inputStringState}
                onChange={setInputStringState}
                customStyles={{
                    textColor: "blue",
                    textWeight: "bold",
                }}
            />
        </Label>
        <hr />
        <Label text="Input text area">
            <InputTextArea
                value={inputStringState}
                onChange={setInputStringState}
                maxLength={100}
            />
        </Label>
        <hr />
        <Label text="Text area resizable">
            <InputTextArea
                value={inputStringState}
                onChange={setInputStringState}
                customStyles={{ isResizable: true, }}
            />
        </Label>
        <hr />
        <Label text="Input loading">
            <Input
                type="text"
                value="Loading"
                isLoading
            />
        </Label>
        <hr />
        <Label text="Input password">
            <InputPassword
                value={inputStringState}
                onChange={setInputStringState}
                placeholder="Password"
                errorMessage={inputStringState ? undefined : "Cannot be empty"}
            />
        </Label> */}
    </DetailComponentPage>
}

export default InputShowCaseDetail