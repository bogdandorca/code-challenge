import { mount } from '@vue/test-utils';
import CcSelect from './cc-select.vue';

describe('CcSelect', () => {
    const wrapper = mount(CcSelect, {
        name: 'test-select-1',
        options: []
    });

    it('Should render a select element', () => {
        expect(wrapper.contains('select')).toBe(true);
    });

    it('Should load a list of options based on the prop', () => {
        wrapper.setProps({
            options: [
                { value: '1', name: '1' },
                { value: '2', name: '2' }
            ]
        });

        expect(Object.keys(wrapper.findAll('option')).length).toBe(2);
    });
});