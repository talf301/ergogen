module.exports = {
    nets: {
        gnd: 'GND',
        p1: 'p1',
        p2: 'p2',
    },
    params: {
        class: 'PAD' // for Button
    },
    body: p => `
    
    (module lib:bat (layer F.Cu) (tstamp 5BF2CC94)
        ${p.at /* parametric position */}
	  (pad 1 thru_hole circle (at 0 -2.54 0) (size 1.1 1.1) (drill 0.8) (layers *.Cu *.SilkS *.Mask) ${p.net.gnd.str}) 
	  (pad 2 thru_hole circle (at 0 0 0) (size 1.1 1.1) (drill 0.8) (layers *.Cu *.SilkS *.Mask) ${p.net.p1.str})
	  (pad 3 thru_hole circle (at 0 2.54 0) (size 1.1 1.1) (drill 0.8) (layers *.Cu *.SilkS *.Mask) ${p.net.p2.str})
     )

    `
}
