import chipImage from '../assets/features/chip.svg'
import chip2Image from '../assets/features/chip_2.svg'
import flaskImage from '../assets/features/flask.svg'
import graphImage from '../assets/features/graph.svg'
import keyImage from '../assets/features/key.svg'
import toolsImage from '../assets/features/tools.svg'
import meterImage from '../assets/features/meter.svg'

const Constants = {
    LandingPage:{
        meterImage,
        FeatureList:[
            {
                imgUrl: chipImage,
                text:'Build Quantum Algorithms with ease',
                subText:'Our low-code platform enables you to create quantum algorithms effortlessly.'
            },
            {
                imgUrl:flaskImage,
                text:'Accelerate Experimentation',
                subText:'Experiment with various algorithms and parameters quickly, and obtain results for each iteration, enhancing your research efficiency.'
            },
            {
                imgUrl:toolsImage,
                text:'Advanced Customization',
                subText:'Access the quantum code in an editable interface, allowing for in-depth customization to meet your specific needs.'
            },
            {
                imgUrl:graphImage,
                text:'Gain Business Insights',
                subText:'Leverage our platform to gain valuable business insights, including speedup metrics, technical feasibility assessments, and potential use cases.'
            },
            {
                imgUrl:keyImage,
                text:'Access Leading Quantum Algorithms',
                subText:'Utilize a wide array of cutting-edge quantum algorithms, such as QSVM, QNN, QRL, QRF, QAOA, VQE, and more, ensuring you have the best tools at your disposal.'
            },
            {
                imgUrl:chip2Image,
                text:'Deploy on Any Quantum Hardware',
                subText:'Run your algorithms on real quantum hardware or simulators of your choice, offering flexibility and convenience for your quantum computing needs.'
            },
        ]
    }
}

export default Constants;