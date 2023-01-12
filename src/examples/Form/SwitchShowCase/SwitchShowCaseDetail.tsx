/* eslint-disable max-lines-per-function */
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Switch, { ContentSwitchAlign, ContentSwitchPosition, SwitchSize }
    from "../../../components/Form/Switch/Switch"
import DetailComponentPage, { Title, Description }
    from "../../_Layout/DetailComponentPage/DetailComponentPage"

const SwitchShowCaseDetail = () => {
    const [switchValue, setSwitchValue,] = useState(false)

    const disabledActionSwitch = () => {
        console.log()
    }

    const { t, } = useTranslation()
    const { t: t_PageSwitch, } = useTranslation("PageComponentSwitch")

    return <DetailComponentPage>
        <Title title={t_PageSwitch("mainSection.title")}>
            {t_PageSwitch("mainSection.description")}
        </Title>
        <Description title={t_PageSwitch("stateSection.title")}
            description={t_PageSwitch("stateSection.description")}
            componentList={[
                {
                    name: t("common.off"),
                    component: <Switch
                        value={false}
                        onChange={disabledActionSwitch}
                    />,
                },
                {
                    name: t("common.on"),
                    component: <Switch
                        value={switchValue}
                        onChange={(value) => setSwitchValue(value)}
                    />,
                },
                {
                    name: t("common.disabled"),
                    component: <Switch
                        value={false}
                        onChange={disabledActionSwitch}
                        disabled
                    />,
                },
            ]}
        />
        <Description title={t_PageSwitch("variantSection.title")}
            description={t_PageSwitch("variantSection.description")}
            componentList={[
                {
                    name: t("common.single"),
                    component: <Switch
                        value={switchValue}
                        onChange={(value) => setSwitchValue(value)}
                    />,
                },
                {
                    name: t_PageSwitch("left"),
                    component: <Switch
                        value={switchValue}
                        onChange={(value) => setSwitchValue(value)}
                    >
                        {t_PageSwitch("label")}
                    </Switch>,
                },
                {
                    name: t_PageSwitch("right"),
                    component: <Switch
                        value={switchValue}
                        onChange={(value) => setSwitchValue(value)}
                        customStyles={{
                            contentPosition: ContentSwitchPosition.Left,
                        }}
                    >
                        {t_PageSwitch("label")}
                    </Switch>,
                },
                {
                    name: t_PageSwitch("bottom"),
                    component: <Switch
                        value={switchValue}
                        onChange={(value) => setSwitchValue(value)}
                        customStyles={{
                            contentPosition: ContentSwitchPosition.Bottom,
                        }}
                    >
                        {t_PageSwitch("label")}
                    </Switch>,
                },
            ]}
        />
        <Description title={t_PageSwitch("sizeSection.title")}
            componentList={[
                {
                    name: t_PageSwitch("small"),
                    component: <Switch
                        value={switchValue}
                        onChange={(value) => setSwitchValue(value)}
                        customStyles={{
                            size: SwitchSize.Small,
                            textSize: "xs",
                        }}
                    >
                        {t_PageSwitch("label")}
                    </Switch>,
                },
                {
                    name: t_PageSwitch("base"),
                    component: <Switch
                        value={switchValue}
                        onChange={(value) => setSwitchValue(value)}
                    >
                        {t_PageSwitch("label")}
                    </Switch>,
                },
                {
                    name: t_PageSwitch("large"),
                    component: <Switch
                        value={switchValue}
                        onChange={(value) => setSwitchValue(value)}
                        customStyles={{
                            size: SwitchSize.Large,
                            textSize: "xl",
                        }}
                    >
                        {t_PageSwitch("label")}
                    </Switch>,
                },
            ]}
        />
        {/* <Switch
            value={switchValue}
            onChange={(value) => setSwitchValue(value)}
        />
        <hr />
        <Switch
            value={switchValue}
            onChange={(value) => setSwitchValue(value)}
            disabled={true}
        />
        <hr />
        <Switch
            value={switchValue}
            onChange={(value) => setSwitchValue(value)}
            accessibility={{ autoFocus: true, }}
        >
            With text or content
        </Switch>
        <hr />
        <Switch
            value={switchValue}
            onChange={(value) => setSwitchValue(value)}
            customStyles={{
                contentPosition: ContentSwitchPosition.Left,
            }}
        >
            With text or content position left
        </Switch>
        <hr />
        <Switch
            value={switchValue}
            onChange={(value) => setSwitchValue(value)}
            customStyles={{
                contentPosition: ContentSwitchPosition.Bottom,
                contentAlign: ContentSwitchAlign.Start,
            }}
        >
            With text or content position bottom
        </Switch>
        <hr />
        <Switch
            value={switchValue}
            onChange={(value) => setSwitchValue(value)}
            customStyles={{
                contentPosition: ContentSwitchPosition.Top,
                contentAlign: ContentSwitchAlign.End,
                textAlign: "center",
            }}
        >
            With text or content align to end
        </Switch> */}
    </DetailComponentPage>
}

export default SwitchShowCaseDetail