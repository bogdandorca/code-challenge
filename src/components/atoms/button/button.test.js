import { mount } from '@vue/test-utils';
import CcButton from './cc-button.vue';

describe('CcButton', () => {
    const wrapper = mount(CcButton);

    it('Should render a button', () => {
        expect(wrapper.contains('button')).toBe(true);
    });

    it('Should keep the default button type if none is sent', () => {
        expect(wrapper.classes()).toContain('default');
    });

    it('Should pass the text prop to the button', () => {
        wrapper.setProps({
            text: 'Hello World!'
        });
        expect(wrapper.text()).toBe('Hello World!');
    });

    it('Should pass the disabled prop to the button', () => {
        wrapper.setProps({
            disabled: true
        });

        expect(wrapper.attributes().disabled).toBe('disabled');
    });

    it('Should pass the type prop to the button', () => {
        wrapper.setProps({
            type: 'primary'
        });
        expect(wrapper.classes()).toContain('primary');
    });
});
