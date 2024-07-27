import 'package:flutter/material.dart';
import 'package:mobile_app/firebase/authentication.dart';

import 'constants.dart';
import 'firebase/db.dart';

class DeliveryDetailsPage extends StatefulWidget {
  const DeliveryDetailsPage({super.key, required this.data, required this.id});

  final Map<String, dynamic> data;
  final String id;

  @override
  State<DeliveryDetailsPage> createState() => _DeliveryDetailsPageState();
}

class _DeliveryDetailsPageState extends State<DeliveryDetailsPage> {
  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    return Scaffold(
      appBar: AppBar(
        // automaticallyImplyLeading: false,
        elevation: 0,
        backgroundColor: primaryColor,
        toolbarHeight: 80,
        title: SizedBox(
          height: 80,
          width: double.infinity,
          child: Image.asset(
            'assets/logo.png',
            fit: BoxFit.fitHeight,
          ),
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 30),
        child: SizedBox(
          height: height * 0.7,
          child: Card(
            color: primaryColor,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Padding(
                  padding: const EdgeInsets.all(12),
                  child: Card(
                    color: secondaryColor,
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Receiver',
                              style: const TextStyle(
                                  fontSize: 20, fontWeight: FontWeight.bold)),
                          Text('Name:${widget.data['receiverName']}',
                              style: const TextStyle(fontSize: 20)),
                          SizedBox(height: 10),
                          Text('Address:${widget.data['receiverAddress']}',
                              style: const TextStyle(fontSize: 20)),
                        ],
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(12),
                  child: Card(
                    color: secondaryColor,
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Pickup Location ',
                              style: const TextStyle(
                                  fontSize: 20, fontWeight: FontWeight.bold)),
                          Text('Name: ${widget.data['pickupLocationName']}',
                              style: const TextStyle(fontSize: 20)),
                          SizedBox(height: 10),
                          Text(
                              'Address: ${widget.data['pickupLocationAddress']}',
                              style: const TextStyle(fontSize: 20)),
                        ],
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(20),
                  child: Text('Bags to Pick Up: ${widget.data['bagsToPickUp']}',
                      style: const TextStyle(fontSize: 20)),
                ),
                if (widget.data['volunteerId'] == null)
                  Align(
                    alignment: Alignment.center,
                    child: ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        foregroundColor: Colors.black,
                        backgroundColor: secondaryColor,
                      ),
                      onPressed: () async {
                        String userId = AuthenticationHelper().uid;

                        // Update volunteerId in Firestore
                        await updateFoodDelivery(userId, widget.id);
                        await addFoodDelivery(userId, widget.id);
                        setState(() {
                          widget.data['volunteerId'] = userId;
                        });
                      },
                      child: const Text('Select Delivery'),
                    ),
                  ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
