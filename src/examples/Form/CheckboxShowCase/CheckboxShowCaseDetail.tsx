/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import Checkbox, { CheckboxSize, ContentCheckboxPosition }
    from "../../../components/Form/Checkbox/Checkbox"
import CheckboxGroupShowCase from "./CheckboxGroupShowcase"
import DetailComponentPage, { Title, Description }
    from "../../_Layout/DetailComponentPage/DetailComponentPage"
import { useTranslation } from "react-i18next"

const CheckboxShowCaseDetail = () => {
    const [value, setValue,] = useState(false)

    const { t, } = useTranslation()
    const { t: t_PageCheckbox, } = useTranslation("PageComponentCheckbox")

    const handleOnChange = (value: boolean) => setValue(value)

    return <DetailComponentPage>
        <Title title={t_PageCheckbox("mainSection.title")}>
            {t_PageCheckbox("mainSection.description")}
        </Title>
        <Description title={t_PageCheckbox("stateSection.title")}
            description={t_PageCheckbox("stateSection.description")}
            componentList={[
                {
                    name: t("common.unchecked"),
                    component: <Checkbox
                        value={value}
                        onChange={handleOnChange}
                    />,
                },
                {
                    name: t("common.checked"),
                    component: <Checkbox
                        value={true}
                        onChange={handleOnChange}
                    />,
                },
                {
                    name: t("common.indeterminate"),
                    component: <Checkbox
                        value={value}
                        customStyles={{ isIndeterminate: true, }}
                        onChange={handleOnChange}
                    />,
                },
                {
                    name: t("common.disabled"),
                    component: <Checkbox
                        value={value}
                        disabled={true}
                        onChange={handleOnChange}
                    />,
                },
            ]}
        >{`import Checkbox from "components/Form/Checkbox/Checkbox"

<Checkbox
    value={value} //${t("common.unchecked")}
    onChange={handleOnChange}
/>

<Checkbox
    value={true} //${t("common.checked")}
    onChange={handleOnChange}
/>

<Checkbox
    value={value}
    onChange={handleOnChange}
    customStyles={{ isIndeterminate: true, }} //${t("common.indeterminate")}
/>

<Checkbox
    value={value}
    onChange={handleOnChange}
    disabled={true} //${t("common.disabled")}
/>`}
        </Description>
        <Description title={t_PageCheckbox("variantSection.title")}
            description={t_PageCheckbox("variantSection.description")}
            componentList={[
                {
                    name: t_PageCheckbox("single"),
                    component: <Checkbox
                        value={value}
                        onChange={handleOnChange}
                    />,
                },
                {
                    name: t_PageCheckbox("left"),
                    component: <Checkbox
                        value={value}
                        onChange={handleOnChange}
                        customStyles={{ contentPosition: ContentCheckboxPosition.Left, }}
                    >
                        {t_PageCheckbox("label")}
                    </Checkbox>,
                },
                {
                    name: t_PageCheckbox("right"),
                    component: <Checkbox
                        value={value}
                        onChange={handleOnChange}
                    >
                        {t_PageCheckbox("label")}
                    </Checkbox>,
                },

            ]}
        >{`import Checkbox, { ContentCheckboxPosition, }
    from "components/Form/Checkbox/Checkbox"

<Checkbox
    value={value}
    onChange={handleOnChange}>
    ${t_PageCheckbox("single")}
</Checkbox>

<Checkbox
    value={value}
    onChange={handleOnChange}
    customStyles={{
        contentPosition: ContentCheckboxPosition.Left,
    }}>
    ${t_PageCheckbox("left")}
</Checkbox>

<Checkbox
    value={value}
    onChange={handleOnChange}>
    ${t_PageCheckbox("right")}
</Checkbox>`}
        </Description>
        <Description title={t_PageCheckbox("sizeSection.title")}
            componentList={[
                {
                    name: t_PageCheckbox("small"),
                    component: <Checkbox
                        value={value}
                        onChange={handleOnChange}
                        customStyles={{
                            size: CheckboxSize.Small,
                            textSize: "xs",
                        }}
                    >
                        {t_PageCheckbox("label")}
                    </Checkbox>,
                },
                {
                    name: t_PageCheckbox("base"),
                    component: <Checkbox
                        value={value}
                        onChange={handleOnChange}
                        customStyles={{ size: CheckboxSize.Base, }}
                    >
                        {t_PageCheckbox("label")}
                    </Checkbox>,
                },
                {
                    name: t_PageCheckbox("large"),
                    component: <Checkbox
                        value={value}
                        onChange={handleOnChange}
                        customStyles={{
                            size: CheckboxSize.Large,
                            textSize: "xl",
                        }}
                    >
                        {t_PageCheckbox("label")}
                    </Checkbox>,
                },
            ]}
        >{`import Checkbox, { CheckboxSize, }
    from "components/Form/Checkbox/Checkbox"

<Checkbox
    value={value}
    onChange={handleOnChange}
    customStyles={{
        size: CheckboxSize.Small,
        textSize: "xs",
    }}>
    ${t_PageCheckbox("small")}
</Checkbox>

<Checkbox
    value={value}
    onChange={handleOnChange}
    customStyles={{
        size: CheckboxSize.Base,
    }}>
    ${t_PageCheckbox("base")}
</Checkbox>

<Checkbox
    value={value}
    onChange={handleOnChange}
    customStyles={{
        size: CheckboxSize.Large,
        textSize: "xl",
    }}>
    ${t_PageCheckbox("large")}
</Checkbox>`}
        </Description>
        { /*
        <hr />
        <CheckboxGroupShowCase />
        <hr /> */}
    </DetailComponentPage>
}

export default CheckboxShowCaseDetail