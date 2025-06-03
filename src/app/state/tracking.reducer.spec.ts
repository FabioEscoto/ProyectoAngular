import { trackingReducer, initialState } from './tracking.reducer';
import { agregarTracking } from './tracking.actions';

describe('trackingReducer', () => {
  it('debe retornar el estado inicial por defecto', () => {
    const action = { type: 'acción desconocida' } as any;
    const state = trackingReducer(undefined, action);
    expect(state).toEqual(initialState);
  });

  it('debe incrementar el contador de un tag nuevo', () => {
    const action = agregarTracking({ tag: 'botonA' });
    const state = trackingReducer(undefined, action);
    expect(state).toEqual({ botonA: 1 });
  });

  it('debe incrementar el contador de un tag existente', () => {
    const prevState = { botonA: 2 };
    const action = agregarTracking({ tag: 'botonA' });
    const state = trackingReducer(prevState, action);
    expect(state).toEqual({ botonA: 3 });
  });

  it('debe agregar múltiples tags diferentes', () => {
    const state1 = trackingReducer(undefined, agregarTracking({ tag: 'btn1' }));
    const state2 = trackingReducer(state1, agregarTracking({ tag: 'btn2' }));
    expect(state2).toEqual({ btn1: 1, btn2: 1 });
  });
});
